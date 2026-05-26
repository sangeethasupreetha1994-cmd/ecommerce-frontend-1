import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://ecommerce-backend-1-9qv0.onrender.com/api/v1/",
});

export default axiosInstance;     