import { ToastContainer } from "react-toastify";
import UploadStream from "./components/uploadStream";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <UploadStream />
    </>
  );
}

export default App;
