import axiosInstance from "../../api/axiosInstance";

import {
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
} from "../slices/authSlice";


// LOGIN USER
export const loginUser = (loginData, navigate) => async (dispatch) => {

    try{

        dispatch(loginStart());

        const response = await axiosInstance.post(
            "/auth/login",
            loginData
        );

        // Save token in localStorage
        localStorage.setItem(
            "token",
            response.data.token
        );

        // Store user data in redux
        dispatch(loginSuccess({
            token: response.data.token,
            user: response.data.user,
        }));

        alert("Login Successful");

        navigate("/");

    }catch(err){

        dispatch(loginFailure());

        alert(
            err.response?.data?.message || "Login Failed"
        );

    }

};


// REGISTER USER
export const registerUser = (registerData, navigate) => async () => {

    try{

        await axiosInstance.post(
            "/auth/register",
            registerData
        );

        alert("Registration Successful");

        navigate("/login");

    }catch(err){

        alert(
            err.response?.data?.message || "Registration Failed"
        );

    }

};


// LOGOUT USER
export const logoutUser = (navigate) => async (dispatch) => {

    localStorage.removeItem("token");

    dispatch(logout());

    navigate("/login");

};