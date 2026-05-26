import axiosInstance from "../../api/axiosInstance";

import {
    setProducts,
    setLoading,
} from "../slices/productSlice";

export const fetchProducts = () => async (dispatch) => {

    try{

        dispatch(setLoading(true));

        const response = await axiosInstance.get("/products");

        dispatch(setProducts(response.data.products));

        dispatch(setLoading(false));

    }catch(err){

        console.log(err);

        dispatch(setLoading(false));

    }

};