import React from 'react';

import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };

    return (

        <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 shadow-xl">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-3xl font-extrabold text-white tracking-wide hover:scale-105 transition duration-300"
                >
                    ShopEase
                </Link>

                {/* Menu */}
                <div className="flex items-center gap-6">

                    <Link
                        to="/"
                        className="text-white font-semibold hover:text-yellow-300 transition duration-300 relative group"
                    >
                        Home

                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                        to="/cart"
                        className="text-white font-semibold hover:text-yellow-300 transition duration-300 relative group"
                    >
                        Cart

                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                        to="/orders"
                        className="text-white font-semibold hover:text-yellow-300 transition duration-300 relative group"
                    >
                        Orders

                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                        to="/contact"
                        className="text-white font-semibold hover:text-yellow-300 transition duration-300 relative group"
                    >
                        Contact

                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    {/* Auth Button */}
                    {
                        token ? (

                            <button
                                onClick={handleLogout}
                                className="bg-white text-pink-600 px-5 py-2 rounded-xl font-bold hover:bg-black hover:text-white transition duration-300 shadow-lg hover:scale-105"
                            >
                                Logout
                            </button>

                        ) : (

                            <Link
                                to="/login"
                                className="bg-white text-purple-700 px-5 py-2 rounded-xl font-bold hover:bg-black hover:text-white transition duration-300 shadow-lg hover:scale-105"
                            >
                                Login
                            </Link>

                        )
                    }

                </div>

            </div>

        </nav>

    );
}

export default Navbar;