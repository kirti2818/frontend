import axios from "axios";
const baseURL = 'http://localhost:8080/api';
// const baseURL = 'https://backend-3-yzs6.onrender.com/api';

let token;

const api = axios.create({
    baseURL,
    withCredentials: true
})
export default api;