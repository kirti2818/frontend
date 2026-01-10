import axios from "axios";

// Prefer env-configured base URL; fallback to Next.js proxy path.
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "/api";

const api = axios.create({
    baseURL,
    withCredentials: true,
});

export default api;