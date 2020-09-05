import React, { Component } from 'react';
import "./styles/main.scss";
import 'bootstrap/dist/css/bootstrap.css';



import NavBar from "./component/navbar";
import Plant from "./component/product/product";

class Layout extends Component{
  
  
//CONNECT TO REDUX STATE
//HANDLE ITEM TO REVIEW
// AND CART

  render(){
    return (
      <div className="layout">
        <NavBar/>
        <div className='product-container container'>
          <Plant/>
        </div>


      </div>
    );
  }
}

export default Layout;