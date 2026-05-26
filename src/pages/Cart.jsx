import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} from "../redux/slices/cartSlice";

import { addOrder } from "../redux/slices/orderSlice";

function Cart() {

    const dispatch = useDispatch();

    const cartItems = useSelector(
        (state) => state.cart.cartItems
    );

    // TOTAL PRICE
    const totalPrice = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    // CHECKOUT FUNCTION
    const handleCheckout = () => {

        if (cartItems.length === 0) {

            alert("Your cart is empty");

            return;

        }

        // CREATE ORDER
        const newOrder = {
            id: Date.now(),
            items: cartItems,
            totalPrice,
            status: "Processing",
        };

        // SAVE ORDER
        dispatch(addOrder(newOrder));

        // CLEAR CART
        dispatch(clearCart());

        alert("Order Placed Successfully");

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-10 px-4">

            <div className="max-w-7xl mx-auto">

                {/* HEADING */}
                <div className="text-center mb-12">

                    <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                        Shopping Cart
                    </h1>

                    <p className="text-lg text-gray-600">
                        Review your selected products before checkout
                    </p>

                </div>

                {
                    cartItems.length === 0 ? (

                        <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

                            <h2 className="text-3xl font-bold text-gray-700 mb-4">
                                Cart Is Empty
                            </h2>

                            <p className="text-gray-500 text-lg">
                                Add products to your cart
                            </p>

                        </div>

                    ) : (

                        <div className="grid lg:grid-cols-3 gap-10">

                            {/* CART ITEMS */}
                            <div className="lg:col-span-2 space-y-6">

                                {
                                    cartItems.map((item) => (

                                        <div
                                            key={item._id}
                                            className="bg-white rounded-3xl shadow-xl p-5 flex flex-col md:flex-row gap-6 items-center hover:shadow-2xl transition duration-300"
                                        >

                                            {/* IMAGE */}
                                            <img
                                                src={item.image}
                                                alt={item.productName}
                                                className="w-40 h-40 object-cover rounded-2xl"
                                            />

                                            {/* DETAILS */}
                                            <div className="flex-1 w-full">

                                                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                                    {item.productName}
                                                </h2>

                                                <p className="text-3xl font-extrabold text-purple-700 mb-5">
                                                    ₹ {item.price}
                                                </p>

                                                {/* QUANTITY */}
                                                <div className="flex items-center gap-4">

                                                    {/* DECREASE */}
                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                decreaseQuantity(item._id)
                                                            )
                                                        }
                                                        className="bg-gray-200 w-10 h-10 rounded-full text-xl font-bold hover:bg-gray-300 transition"
                                                    >
                                                        -
                                                    </button>

                                                    <span className="text-xl font-bold">
                                                        {item.quantity}
                                                    </span>

                                                    {/* INCREASE */}
                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                increaseQuantity(item._id)
                                                            )
                                                        }
                                                        className="bg-gray-200 w-10 h-10 rounded-full text-xl font-bold hover:bg-gray-300 transition"
                                                    >
                                                        +
                                                    </button>

                                                </div>

                                            </div>

                                            {/* REMOVE */}
                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        removeFromCart(item._id)
                                                    )
                                                }
                                                className="bg-red-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-red-600 transition"
                                            >
                                                Remove
                                            </button>

                                        </div>

                                    ))
                                }

                            </div>

                            {/* ORDER SUMMARY */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 h-fit sticky top-10">

                                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                                    Order Summary
                                </h2>

                                {/* TOTAL PRODUCTS */}
                                <div className="flex items-center justify-between mb-6">

                                    <p className="text-xl text-gray-600">
                                        Products
                                    </p>

                                    <p className="text-xl font-bold">
                                        {cartItems.length}
                                    </p>

                                </div>

                                {/* DELIVERY */}
                                <div className="flex items-center justify-between mb-6">

                                    <p className="text-xl text-gray-600">
                                        Delivery
                                    </p>

                                    <p className="text-xl font-bold text-green-600">
                                        Free
                                    </p>

                                </div>

                                {/* TOTAL PRICE */}
                                <div className="border-t pt-6 flex items-center justify-between mb-8">

                                    <p className="text-2xl font-bold text-gray-800">
                                        Grand Total
                                    </p>

                                    <p className="text-4xl font-extrabold text-pink-600">
                                        ₹ {totalPrice}
                                    </p>

                                </div>

                                {/* CHECKOUT BUTTON */}
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition duration-300"
                                >
                                    Proceed To Checkout
                                </button>

                            </div>

                        </div>

                    )
                }

            </div>

        </div>

    );
}

export default Cart;