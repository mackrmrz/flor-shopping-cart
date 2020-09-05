import {
    ADDING_TO_CART,
    REMOVE_ITEM
} from "./types";


export function addToCart(product) {
    return({
        type: ADDING_TO_CART,
        payload: product
    })
}

// export const removeItem = (items, product) => (dispatch) => {
//     const cartItems = items.slice().filter(
//         x => x._id !== product._id
//     );

//     dispatch({
//         type: REMOVE_ITEM,
//         payload: { cartItem }
//     });
//     localStorage.setItem("cartItems", JSON.stringify(cartItem));
// }