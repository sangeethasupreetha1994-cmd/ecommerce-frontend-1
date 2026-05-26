import React, { useState } from "react";

import { Link } from "react-router-dom";

function Footer() {

    // EMAIL STATE
    const [email, setEmail] = useState("");

    // SUBSCRIBE FUNCTION
    const handleSubscribe = () => {

        // VALIDATION
        if (!email) {

            alert("Please enter email");

            return;

        }

        // EMAIL FORMAT CHECK
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter valid email");

            return;

        }

        // SUCCESS
        alert(`Subscribed Successfully : ${email}`);

        // CLEAR INPUT
        setEmail("");

    };

    return (

        <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white mt-16">

            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* LOGO */}
                    <div>

                        <h1 className="text-4xl font-extrabold mb-4">
                            ShopEase
                        </h1>

                        <p className="text-gray-200 leading-7">
                            Your one-stop destination for fashion,
                            electronics, accessories, and premium
                            shopping experience.
                        </p>

                    </div>

                    {/* QUICK LINKS */}
                    <div>

                        <h2 className="text-2xl font-bold mb-5">
                            Quick Links
                        </h2>

                        <div className="flex flex-col gap-3">

                            <Link
                                to="/"
                                className="hover:text-yellow-300 transition duration-300"
                            >
                                Home
                            </Link>

                            <Link
                                to="/cart"
                                className="hover:text-yellow-300 transition duration-300"
                            >
                                Cart
                            </Link>

                            <Link
                                to="/orders"
                                className="hover:text-yellow-300 transition duration-300"
                            >
                                Orders
                            </Link>

                            <Link
                                to="/contact"
                                className="hover:text-yellow-300 transition duration-300"
                            >
                                Contact
                            </Link>

                        </div>

                    </div>

                    {/* SUPPORT */}
                    <div>

                        <h2 className="text-2xl font-bold mb-5">
                            Support
                        </h2>

                        <div className="space-y-3 text-gray-200">

                            <p>Email: support@shopease.com</p>

                            <p>Phone: +91 9876543210</p>

                            <p>Chennai, Tamil Nadu</p>

                        </div>

                    </div>

                    {/* NEWSLETTER */}
                    <div>

                        <h2 className="text-2xl font-bold mb-5">
                            Newsletter
                        </h2>

                        <p className="text-gray-200 mb-4">
                            Subscribe for latest updates and offers.
                        </p>

                        <div className="flex flex-col gap-4">

                            {/* INPUT */}
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                className="px-4 py-3 rounded-xl text-black outline-none focus:ring-4 focus:ring-pink-300"
                            />

                            {/* BUTTON */}
                            <button
                                onClick={handleSubscribe}
                                className="bg-black text-white py-3 rounded-xl font-bold hover:bg-white hover:text-black hover:scale-105 transition duration-300"
                            >
                                Subscribe
                            </button>

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-gray-200 text-center">
                        © 2026 ShopEase. All Rights Reserved.
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-4">

                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-purple-700 hover:scale-110 transition duration-300 cursor-pointer">
                            F
                        </div>

                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-pink-700 hover:scale-110 transition duration-300 cursor-pointer">
                            I
                        </div>

                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-blue-700 hover:scale-110 transition duration-300 cursor-pointer">
                            T
                        </div>

                    </div>

                </div>

            </div>

        </footer>

    );
}

export default Footer;