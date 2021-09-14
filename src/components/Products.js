import React from 'react';
import Product from './Product';
import './Products.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

class Products extends React.Component {
  render() {
    return (
      <section>
        <div className="products">
          <h2>Mais Vendidos</h2>
          <div className="line-products"></div>
          <div className="products-mobile"><Product /></div>
          <div className="products-desk">
            <span className="arrow"><IoIosArrowBack /></span>   
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <span className="arrow"><IoIosArrowForward /></span>   
          </div>
        </div>
      </section>
    )
  }
}

export default Products;