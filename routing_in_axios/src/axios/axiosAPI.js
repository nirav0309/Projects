import axios from "axios";

const MyAPI = axios.create({ baseURL: "http://localhost:3033/userData" });

export {MyAPI}