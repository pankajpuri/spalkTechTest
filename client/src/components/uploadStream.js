import { useState } from "react";
import { toast } from "react-toastify";
import uploadMedia from "./services/httpService";
import "./styles/uploadStream.css";

const UploadStream = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file, file.name);
    try {
      await uploadMedia(formData);
      toast.success("File uploaded successfully.");
    } catch (error) {
      toast.warning("Failed to upload file.");
    }
  };

  return (
    <div className="uploadStreamContainer">
      <h2>Upload File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadStream;
