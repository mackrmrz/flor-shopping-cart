import { SHOW_PRODUCTS, SINGLE_PRODUCT } from './types';

import axios from "axios"; 

// import products from '../data.json';


export function fetchingData() {
    return function(dispatch) {
        axios.get('http://localhost:8080/products')
            .then(response => {
                dispatch({
                    type: SHOW_PRODUCTS,
                    payload: response.data
                })
                console.log("response", response);
            })
    }
}