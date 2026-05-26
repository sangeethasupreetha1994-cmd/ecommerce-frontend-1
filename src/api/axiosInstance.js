import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://ecommerce-backend-1-3.onrender.com",
    withCredentials: true,
});

export default axiosInstance;