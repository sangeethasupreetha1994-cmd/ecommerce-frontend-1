import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axiosInstance from "../api/axiosInstance";

import { useDispatch } from "react-redux";

import { addToCart } from "../redux/slices/cartSlice";

function ProductDetail() {

    const { id } = useParams();

    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);

    // FETCH PRODUCT
    const fetchProduct = async () => {

        try {

            const response = await axiosInstance.get(`/products/${id}`);

            setProduct(response.data.product);

        } catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        fetchProduct();

    }, []);

    // LOADING
    if (!product) {

        return (

            <div className="min-h-screen flex items-center justify-center bg-gray-100">

                <h1 className="text-4xl font-bold text-purple-700 animate-pulse">
                    Loading Product...
                </h1>

            </div>

        );

    }

    // ADD TO CART
    const handleAddToCart = () => {

        dispatch(addToCart(product));

        alert("Product Added To Cart");

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-6">

            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12">

                    {/* Product Image */}
                    <div className="overflow-hidden rounded-3xl">

                        <img
                            src={
                                product.image ||
                                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80"
                            }
                            alt={product.productName}
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />

                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-center">

                        {/* Category */}
                        <p className="text-purple-600 font-bold uppercase tracking-widest mb-3">
                            Premium Product
                        </p>

                        {/* Product Name */}
                        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
                            {product.productName}
                        </h1>

                        {/* Price */}
                        <p className="text-4xl font-bold text-pink-600 mb-6">
                            ₹ {product.price}
                        </p>

                        {/* Description */}
                        <p className="text-gray-600 leading-8 text-lg mb-8">
                            {
                                product.description ||
                                "Experience premium quality and modern design with this amazing product."
                            }
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-10">

                            <div className="bg-purple-100 text-purple-700 p-4 rounded-2xl text-center font-semibold">
                                High Quality
                            </div>

                            <div className="bg-pink-100 text-pink-700 p-4 rounded-2xl text-center font-semibold">
                                Fast Delivery
                            </div>

                            <div className="bg-indigo-100 text-indigo-700 p-4 rounded-2xl text-center font-semibold">
                                Secure Payment
                            </div>

                            <div className="bg-yellow-100 text-yellow-700 p-4 rounded-2xl text-center font-semibold">
                                Best Offer
                            </div>

                        </div>

                        {/* Button */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full md:w-fit bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition duration-300"
                        >
                            Add To Cart
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default ProductDetail;