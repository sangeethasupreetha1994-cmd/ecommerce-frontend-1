import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {

        // ADD TO CART
        addToCart: (state, action) => {

            const existingItem = state.cartItems.find(
                (item) => item._id === action.payload._id
            );

            // PRODUCT ALREADY EXISTS
            if (existingItem) {

                existingItem.quantity += 1;

            } else {

                // NEW PRODUCT
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                });

            }

        },

        // REMOVE ITEM
        removeFromCart: (state, action) => {

            state.cartItems = state.cartItems.filter(
                (item) => item._id !== action.payload
            );

        },

        // INCREASE QUANTITY
        increaseQuantity: (state, action) => {

            const item = state.cartItems.find(
                (item) => item._id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }

        },

        // DECREASE QUANTITY
        decreaseQuantity: (state, action) => {

            const item = state.cartItems.find(
                (item) => item._id === action.payload
            );

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }

        },

        // CLEAR CART
        clearCart: (state) => {

            state.cartItems = [];

        },

    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;