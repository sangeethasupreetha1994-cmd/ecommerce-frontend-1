import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const Home = () => {
    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // FETCH PRODUCTS
    const fetchProducts = async () => {
        try {
            const response = await axiosInstance.get("/products");

            setProducts(response.data.products || response.data || []);

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // ADD TO CART
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        alert("Product Added To Cart");
    };

    return (
        <div className="min-h-screen bg-gray-100">

            {/* HERO */}
            <div className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                        Discover Amazing Products
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
                        Explore premium products with amazing offers
                    </p>
                </div>
            </div>

            {/* PRODUCTS */}
            <div className="max-w-7xl mx-auto px-6 py-14">

                <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
                    Featured Products
                </h2>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <p className="text-2xl font-semibold text-purple-700 animate-pulse">
                            Loading Products...
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                        {products.map((product) => (
                            <div
                                key={product._id}
                                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300"
                            >

                                {/* IMAGE FIXED HERE 🔥 */}
                                <img
                                    src={
                                        product.image && product.image.trim() !== ""
                                            ? product.image
                                            : "https://via.placeholder.com/400x300?text=No+Image"
                                    }
                                    alt={product.productName || "product"}
                                    className="w-full h-64 object-cover"
                                />

                                {/* DETAILS */}
                                <div className="p-6">

                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                        {product.productName}
                                    </h3>

                                    <p className="text-gray-600 mb-4">
                                        {product.description || "Premium quality product"}
                                    </p>

                                    <div className="flex items-center justify-between">

                                        <p className="text-2xl font-extrabold text-purple-700">
                                            ₹ {product.price}
                                        </p>

                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
                                        >
                                            Add To Cart
                                        </button>

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                )}

            </div>
        </div>
    );
};

export default Home;