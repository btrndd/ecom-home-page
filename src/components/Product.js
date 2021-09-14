import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import product1 from '../img/product_1.png';
import { BsStarFill, BsStar } from 'react-icons/bs';
import './Product.css';

class Product extends React.Component {
  render() {
    return (
      <div className="product">        
        <div className="tag"><h3>OFF</h3></div>
        <figure>
          <img height="200" width="216" alt="foto de um sapato" src={ product1 } />
          <figcaption>SAPATO FLOATER PRETO</figcaption>          
        </figure>
        <span className="rating"><BsStarFill /><BsStar /><BsStar /><BsStar /><BsStar /></span>
        <p className="comparative-price">de R$ 299,00</p>
        <h3 className="price">por R$ 259,90</h3>
        <p className="installments">ou em 9x de R$ 28,87</p>
        <button className="buy-button"><AiOutlineWhatsApp />COMPRAR</button>
      </div>
    );
  }
}

export default Product;