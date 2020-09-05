import { combineReducers } from "redux";

import products from "./productReducer";
import cartItem from "./cartReducer";

const rootReducer = combineReducers({
    products,
    cartItem
});

export default rootReducer;