import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://ecommerce-backend-1-1.onrender.com/"
});

export default axiosInstance;     