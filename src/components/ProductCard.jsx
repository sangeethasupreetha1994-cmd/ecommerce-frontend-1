import React from "react";

import { Link } from "react-router-dom";

function ProductCard({ product }) {

    return (

        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">

            {/* Product Image */}
            <div className="overflow-hidden">

                <img
                    src={
                        product.image ||
                        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
                    }
                    alt={product.productName}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

            </div>

            {/* Product Details */}
            <div className="p-6">

                {/* Product Name */}
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {product.productName}
                </h2>

                {/* Description */}
                <p className="text-gray-500 mb-5 line-clamp-2">
                    {
                        product.description ||
                        "Premium quality product with modern features and stylish design."
                    }
                </p>

                {/* Price & Button */}
                <div className="flex items-center justify-between">

                    <p className="text-3xl font-extrabold text-purple-700">
                        ₹ {product.price}
                    </p>

                    <Link
                        to={`/product/${product._id}`}
                        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-5 py-2 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
                    >
                        View
                    </Link>

                </div>

            </div>

        </div>

    );
}

export default ProductCard;