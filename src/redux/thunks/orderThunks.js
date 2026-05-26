import axiosInstance from "../../api/axiosInstance";

import { setOrders } from "../slices/orderSlice";

export const fetchOrders = () => async (dispatch) => {

    try{

        const response = await axiosInstance.get("/orders");

        dispatch(setOrders(response.data.orders));

    }catch(err){

        console.log(err);

    }

};