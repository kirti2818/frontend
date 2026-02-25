import { io } from "socket.io-client";
const token = (typeof window !== 'undefined') ? localStorage.getItem('token') : null;
const baseURL = 'https://backend-3-yzs6.onrender.com'
// const baseURL = "http://localhost:8080";
const socket = io(baseURL, {
  // allow polling fallback so connection can still work when websocket upgrade isn't proxied
  transports: ['websocket'],
  auth: token ? { token } : undefined,
  reconnection: true,
  withCredentials: true,
  // autoConnect: false,
});
export default socket;