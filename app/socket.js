import { io } from "socket.io-client";
const token = (typeof window !== 'undefined') ? localStorage.getItem('token') : null;
const baseURL = 'https://backend-3-yzs6.onrender.com'
// const baseURL = "http://localhost:8080";
const socket = io(baseURL, {
  transports: ['websocket', 'polling'], // ✅ allow fallback
  // reconnection: true,
  // reconnectionAttempts: 5,
  // reconnectionDelay: 1000,
  auth: token ? { token } : undefined,
  withCredentials: true,
  autoConnect: false
});
export default socket;


socket.on("connect", () => {
  console.log("✅ Connected:", socket.id);
});

socket.on("disconnect", (reason) => {
  console.log("❌ Disconnected:", reason);
});

socket.on("connect_error", (err) => {
  console.log("🚨 Connect Error:", err.message);
});

socket.on("reconnect_attempt", () => {
  console.log("🔄 Reconnect attempt...");
});