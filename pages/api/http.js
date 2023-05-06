import axios from "axios";
// import * as io from "socket.io-client";

export default axios.create({
  baseURL: "http://localhost:4700/api/",
  // baseURL: "https://stagingapi.sportsreels.io/api/",
});
