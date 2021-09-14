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
          <div className="products-list">
            <span className="arrow-carrosel"><IoIosArrowBack /></span>   
            <span className="product-1"><Product /></span>
            <span className="product-2"><Product /></span>
            <span className="product-3"><Product /></span>
            <span className="product-4"><Product /></span>
            <span className="product-5"><Product /></span>
            <span className="arrow-carrosel"><IoIosArrowForward /></span>   
          </div>
        </div>
      </section>
    )
  }
}

export default Products;