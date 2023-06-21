import axios from "axios";

const mpegtsParseApiEndpoint = "http://localhost:8000/api/mpegparser";

const uploadMedia = async (formData) => {
  try {
    const response = await axios.post(mpegtsParseApiEndpoint, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export default uploadMedia;
