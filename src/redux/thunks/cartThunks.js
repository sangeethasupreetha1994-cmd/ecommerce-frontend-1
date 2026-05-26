export const addCartItem = (product) => async (dispatch) => {

    dispatch({
        type: "cart/addToCart",
        payload: product,
    });

};