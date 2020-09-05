import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Plant extends Component{

    addToCart = () => {
        const { _id, title, description, product_image, price } = this.props;
        console.log("shoping cart", _id, title, description, product_image, price);

        this.props.addToCart(_id, title, description, product_image, price);
    }
    render(){
    const { className, 
            _id,
            title, 
            description, 
            product_image, 
            price,
        } = this.props;
    
        const imageStyles = {
            backgroundImage: "url(" + product_image + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
          };

        return(
            <div className='product__plant row'>

                <div className={`${className} product__card card`}>
                    
                    <img src={product_image} alt="logo card-img-top"/>

                    <div className="product__title card-title">
                    {title}
                    </div>
                <div className='hidden-description card-body'>
                    {description}
                    </div>
                    {/* <div className='product__image' style={imageStyles}/> */}
                    <div className='product__price'>
                        ${price}
                    </div>
                    <button onClick={this.addToCart} className='product__button'>Add to Cart</button>
                </div>

            </div>
        )
    }
}
Plant = connect(null, actions)(Plant);
export default Plant;