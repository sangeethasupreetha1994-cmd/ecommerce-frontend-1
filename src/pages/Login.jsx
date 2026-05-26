import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { loginUser } from "../redux/thunks/authThunks";

function Login() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    // SHOW / HIDE PASSWORD
    const [showPassword, setShowPassword] = useState(false);

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUser(loginData, navigate));
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-pink-500 to-indigo-700 px-4">

            {/* Main Container */}
            <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                {/* Left Side */}
                <div className="hidden lg:flex relative">

                    <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80"
                        alt="login"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-10">

                        <h1 className="text-5xl font-bold mb-6">
                            Welcome Back
                        </h1>

                        <p className="text-lg text-center leading-8">
                            Explore amazing products and enjoy your
                            shopping experience with our modern
                            E-Commerce platform.
                        </p>

                    </div>

                </div>

                {/* Right Side */}
                <div className="p-8 md:p-14 flex flex-col justify-center bg-white">

                    <div className="text-center mb-10">

                        <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
                            Login Account
                        </h2>

                        <p className="text-gray-500">
                            Enter your credentials to continue
                        </p>

                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        {/* Email */}
                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={loginData.email}
                                onChange={(e) =>
                                    setLoginData({
                                        ...loginData,
                                        email: e.target.value,
                                    })
                                }
                                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition duration-300"
                                required
                            />

                        </div>

                        {/* Password */}
                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Password
                            </label>

                            {/* PASSWORD INPUT + SHOW HIDE */}
                            <div className="relative">

                                <input
                                    type={
                                        showPassword
                                        ? "text"
                                        : "password"
                                    }
                                    placeholder="Enter your password"
                                    value={loginData.password}
                                    onChange={(e) =>
                                        setLoginData({
                                            ...loginData,
                                            password: e.target.value,
                                        })
                                    }
                                    className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition duration-300"
                                    required
                                />

                                {/* SHOW HIDE BUTTON */}
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

                        {/* Forgot Password */}
                        <div className="flex justify-end">

                            <button
                                type="button"
                                className="text-purple-600 hover:text-pink-500 font-medium transition"
                            >
                                Forgot Password?
                            </button>

                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition duration-300"
                        >
                            Login
                        </button>

                    </form>

                    {/* Register */}
                    <p className="text-center mt-8 text-gray-600">

                        Don’t have an account?

                        <Link
                            to="/register"
                            className="text-purple-700 font-bold ml-2 hover:text-pink-500 transition"
                        >
                            Register
                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );
}

export default Login;