import axios from "axios";
// const baseURL = 'http://localhost:8080/api';
const baseURL = 'https://backend-3-yzs6.onrender.com/api';

const api = axios.create({
    baseURL,
    // headers: {
    //     'Content-Type': 'application/json'
    // },
    withCredentials: true
})
export default api;