import {
    ADDING_TO_CART, REMOVE_ITEM,
} from '../actions/types';

const INITIAL_STATE = {
    cartItem: []
    // cartItem: JSON.parse(localStorage.getItem("cartItems") || "[]")
}

export default function(state= INITIAL_STATE, action){
    switch(action.type){
        case ADDING_TO_CART:
            console.log("action", action.payload);
            var alreadyIn = false
            var cartProductTwo = []
            state.cartItem.map(cartProduct => {
                console.log(cartItem);
                if(cartProduct.id == action.payload){
                    alreadyIn = true
                    cartItem.quantity += 1;
                }
                cartItem.push(cartProductTwo);
            })
            if(alreadyIn == false) {
                cartProductTwo.push({
                    _id: state.cartItem.length + 1,
                    product: action.payload,
                    quantity: 1
                })
            }
            return{
                ...state,
                cartItem: action.payload,
            }


            
        case REMOVE_ITEM:
            const { cartItem } =action.payload.cartItem;
            return{
                ...state,
                cartItem
            }

            default: return state;
    }
}







// var alreadyIn = false
//             const newCartItem = action.payload;
//             var cartProduct = []
//             state.cartItem.map(cartProduct => {
//                 if(cartProduct._id == newCartItem._id){
//                     alreadyIn = true
//                     cartProduct.quantity += 1;
//                 }
//                 cartProduct.push(cartProduct);
//             })
//             if(alreadyIn == false) {
//                 cartProduct.push({
//                     _id: state.cartItem.length + 1,
//                     product: newCartItem,
//                     quantity: 1
//                 })
//             }



