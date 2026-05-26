import React, { useState } from "react";

function Orders() {

    const [orders] = useState([

        {
            id: 1,
            productName: "Samsung Galaxy S24",
            price: 72000,
            quantity: 1,
            status: "Processing",
            image:
                "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80",
        },

        {
            id: 2,
            productName: "Wireless Headphone",
            price: 4999,
            quantity: 2,
            status: "Shipped",
            image:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
        },

        {
            id: 3,
            productName: "Gaming Laptop",
            price: 85000,
            quantity: 1,
            status: "Delivered",
            image:
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=80",
        },

    ]);

    // STATUS MESSAGE
    const getStatusMessage = (status) => {

        switch (status) {

            case "Processing":
                return "Your order has been placed successfully and is currently being processed.";

            case "Shipped":
                return "Your order has been shipped and is on the way to your delivery address.";

            case "Delivered":
                return "Your product has been delivered successfully. Thank you for shopping with us.";

            default:
                return "";

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-10 px-4">

            <div className="max-w-7xl mx-auto">

                {/* HEADING */}
                <div className="text-center mb-12">

                    <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                        My Orders
                    </h1>

                    <p className="text-gray-600 text-lg">
                        Track and manage your recent purchases
                    </p>

                </div>

                {/* ORDERS */}
                <div className="space-y-8">

                    {
                        orders.map((order) => (

                            <div
                                key={order.id}
                                className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 hover:shadow-purple-300 transition duration-300"
                            >

                                <div className="flex flex-col lg:flex-row gap-8">

                                    {/* IMAGE */}
                                    <img
                                        src={order.image}
                                        alt={order.productName}
                                        className="w-full lg:w-72 h-72 object-cover rounded-3xl"
                                    />

                                    {/* DETAILS */}
                                    <div className="flex-1">

                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

                                            <h2 className="text-4xl font-extrabold text-gray-800">
                                                {order.productName}
                                            </h2>

                                            {/* STATUS */}
                                            <span
                                                className={`px-6 py-3 rounded-full text-sm font-bold w-fit

                                                ${
                                                    order.status === "Processing"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : order.status === "Shipped"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : "bg-green-100 text-green-700"
                                                }`}
                                            >
                                                {order.status}
                                            </span>

                                        </div>

                                        {/* PRICE */}
                                        <p className="text-4xl font-extrabold text-purple-700 mb-4">
                                            ₹ {order.price}
                                        </p>

                                        {/* QUANTITY */}
                                        <p className="text-xl text-gray-600 mb-6">
                                            Quantity : {order.quantity}
                                        </p>

                                        {/* DESCRIPTION */}
                                        <div className="bg-gray-100 rounded-2xl p-5">

                                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                                Order Update
                                            </h3>

                                            <p className="text-gray-600 leading-8">
                                                {
                                                    getStatusMessage(
                                                        order.status
                                                    )
                                                }
                                            </p>

                                        </div>

                                        {/* BUTTONS */}
                                        <div className="flex flex-wrap gap-4 mt-8">

                                            <button
                                                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition duration-300"
                                            >
                                                Track Order
                                            </button>

                                            <button
                                                className="bg-black text-white px-8 py-3 rounded-2xl font-bold hover:bg-gray-800 transition duration-300"
                                            >
                                                Download Invoice
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>

    );
}

export default Orders;