import React from 'react';
import logo from '../img/logo.png';
import './Header.css';
import { FaSistrix } from 'react-icons/fa';
import { BsFillCaretDownFill, BsPerson } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

class Header extends React.Component {
  render() {
    return(
      <header>
        <div className="header">
          <figure className="logo">
            <img height="49" width="135" alt="logo da marca" src={logo} />
          </figure>
          <ul className="main-menu">
            <li className="menu-item">Home</li>
            <li className="menu-item">Categoria 1 <BsFillCaretDownFill className="icon" /></li>
            <li className="menu-item">Categoria 2 <BsFillCaretDownFill className="icon" /></li>
            <li className="menu-item">Contato</li>
          </ul>
          <div className="search-bar">
            <input name="search-bar" className="search-bar-input" type="search" value="" placeholder="O que está procurando?" />
            <FaSistrix />
          </div>
          <span className="my-account"><BsPerson />Minha Conta</span>
          <span className="cart"><FiShoppingCart />
            <span className="cart-items"><p>1</p></span>
          </span>
        </div>
      </header>
    )
  }
}

export default Header;