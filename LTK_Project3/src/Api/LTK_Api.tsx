import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9090",
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});
export default instance;
