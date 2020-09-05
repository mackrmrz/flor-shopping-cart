import { SHOW_PRODUCTS, SINGLE_PRODUCT } from '../actions/types';

const INITIAL_STATE = {
    products: [],
}

export default function(state= INITIAL_STATE, action) {
    switch(action.type) {
        case SHOW_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case SINGLE_PRODUCT:
            return{
                ...state,
                products: action.payload
            }
        default: return state;
    }
}