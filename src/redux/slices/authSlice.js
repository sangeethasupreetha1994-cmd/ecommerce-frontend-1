import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",

    initialState: {
        user: null,
        token: localStorage.getItem("token") || null,
        loading: false,
    },

    reducers: {

        loginStart: (state) => {
            state.loading = true;
        },

        loginSuccess: (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },

        loginFailure: (state) => {
            state.loading = false;
        },

        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
} = authSlice.actions;

export default authSlice.reducer;