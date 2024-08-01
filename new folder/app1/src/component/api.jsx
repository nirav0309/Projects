const { default: axios } = require("axios");

const API = axios.create({
  baseURL: "https://finalspaceapi.com/api/v0/character/?limit=2",
});

export { API };
