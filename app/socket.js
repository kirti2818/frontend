import { io } from "socket.io-client";
// const baseURL = 'http://localhost:8080';
const baseURL = 'https://backend-3-yzs6.onrender.com'
const socket = io(baseURL, {
    autoConnect: false,
    transports: ['websocket'],
    withCredentials: true
});

export default socket