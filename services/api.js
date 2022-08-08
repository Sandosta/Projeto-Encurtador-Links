import axios from "axios";
export const key = "68f0920b365ea2fc77841e897293f9739a66bf66";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
