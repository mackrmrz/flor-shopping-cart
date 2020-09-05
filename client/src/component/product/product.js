import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Plant from './plant';

class Product extends Component{

    componentDidMount(){
        this.props.fetchingData();
      }



    render(){
        
        return(
            <div className='product-container'>
                {
                    this.props.products.map((product, id) => {
                    return <Plant className="product" {...product} key={id}/>
                    })
                }
            </div>

        )
    }
}

function mapStateToProps(state){
    const { products } = state.products;
    const { cartItem } = state.cartItem;
    return{ 
      products,
      cartItem

    }
}
Product= connect(mapStateToProps, actions)(Product);
export default Product;