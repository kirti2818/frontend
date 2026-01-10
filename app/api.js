import axios from "axios";

// Use Next.js rewrite proxy for first-party cookies.
const baseURL = "/api";

const api = axios.create({
    baseURL,
    withCredentials: true,
});

export default api;