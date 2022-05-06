import axios from "axios";

export default axios.create({
  baseURL: "http://15.207.21.72:3211/shethink/v1",
  headers: { Accept: "application/json" },
});
