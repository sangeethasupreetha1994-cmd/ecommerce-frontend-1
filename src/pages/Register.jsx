import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axiosInstance from "../api/axiosInstance";

function Register() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

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

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 px-4">

            {/* Main Container */}
            <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                {/* Left Section */}
                <div className="hidden lg:flex relative">

                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                        alt="register"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-10">

                        <h1 className="text-5xl font-bold mb-6">
                            Join With Us
                        </h1>

                        <p className="text-lg text-center leading-8">
                            Create your account and start exploring
                            the latest fashion, electronics, and
                            amazing deals in our E-Commerce store.
                        </p>

                    </div>

                </div>

                {/* Right Section */}
                <div className="bg-white p-8 md:p-14 flex flex-col justify-center">

                    {/* Heading */}
                    <div className="text-center mb-10">

                        <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
                            Create Account
                        </h2>

                        <p className="text-gray-500">
                            Register to continue shopping
                        </p>

                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        {/* Username */}
                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Username
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your username"
                                value={registerData.username}
                                onChange={(e) =>
                                    setRegisterData({
                                        ...registerData,
                                        username: e.target.value,
                                    })
                                }
                                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition duration-300"
                                required
                            />

                        </div>

                        {/* Email */}
                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={registerData.email}
                                onChange={(e) =>
                                    setRegisterData({
                                        ...registerData,
                                        email: e.target.value,
                                    })
                                }
                                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition duration-300"
                                required
                            />

                        </div>

                        {/* Password */}
                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Password
                            </label>

                            <div className="relative">

                                <input
                                    type={
                                        showPassword
                                        ? "text"
                                        : "password"
                                    }
                                    placeholder="Enter your password"
                                    value={registerData.password}
                                    onChange={(e) =>
                                        setRegisterData({
                                            ...registerData,
                                            password: e.target.value,
                                        })
                                    }
                                    className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition duration-300"
                                    required
                                />

                                {/* Show Hide Button */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-purple-600 hover:text-pink-500 transition"
                                >
                                    {
                                        showPassword
                                        ? "Hide"
                                        : "Show"
                                    }
                                </button>

                            </div>

                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition duration-300"
                        >
                            Create Account
                        </button>

                    </form>

                    {/* Login Link */}
                    <p className="text-center mt-8 text-gray-600">

                        Already have an account?

                        <Link
                            to="/login"
                            className="text-purple-700 font-bold ml-2 hover:text-pink-500 transition"
                        >
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );
}

export default Register;