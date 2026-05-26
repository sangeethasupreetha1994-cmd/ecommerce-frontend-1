import React, { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // HANDLE INPUT
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    // HANDLE SUBMIT
    const handleSubmit = (e) => {

        e.preventDefault();

        alert("Message Sent Successfully");

        setFormData({
            name: "",
            email: "",
            message: "",
        });

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">

                    <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                        Contact Us
                    </h1>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions or feedback? We’d love to hear from you.
                        Send us a message and our team will respond quickly.
                    </p>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Left Side */}
                    <div className="bg-white rounded-3xl shadow-2xl p-8">

                        <h2 className="text-3xl font-bold text-gray-800 mb-8">
                            Send Message
                        </h2>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            {/* Name */}
                            <div>

                                <label className="block mb-2 font-semibold text-gray-700">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition duration-300"
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
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition duration-300"
                                    required
                                />

                            </div>

                            {/* Message */}
                            <div>

                                <label className="block mb-2 font-semibold text-gray-700">
                                    Message
                                </label>

                                <textarea
                                    rows="6"
                                    name="message"
                                    placeholder="Write your message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition duration-300 resize-none"
                                    required
                                />

                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition duration-300"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col gap-8">

                        {/* Contact Card */}
                        <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-purple-300 transition duration-300">

                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-5">

                                <div>
                                    <p className="text-lg font-bold text-purple-700">
                                        Email
                                    </p>

                                    <p className="text-gray-600">
                                        support@shopease.com
                                    </p>
                                </div>

                                <div>
                                    <p className="text-lg font-bold text-pink-700">
                                        Phone
                                    </p>

                                    <p className="text-gray-600">
                                        +91 9876543210
                                    </p>
                                </div>

                                <div>
                                    <p className="text-lg font-bold text-indigo-700">
                                        Address
                                    </p>

                                    <p className="text-gray-600">
                                        Chennai, Tamil Nadu, India
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Support Card */}
                        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl shadow-2xl p-8 text-white">

                            <h2 className="text-3xl font-bold mb-5">
                                24/7 Customer Support
                            </h2>

                            <p className="text-lg leading-8 text-gray-100">
                                Our support team is always available to help
                                you with your orders, payments, delivery,
                                and product information.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Contact;