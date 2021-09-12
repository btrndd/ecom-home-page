import React from 'react';
import logo from '../img/logo.png';
import './Header.css';
import { FaSistrix } from 'react-icons/fa';
import { BsFillCaretDownFill, BsPerson } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';

class Header extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchText: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;  
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText } = this.state;
    return(
      <header>
        <div className="header">
          <span className="sandwich-menu"><AiOutlineMenu /></span>
          <figure className="logo">
            <img alt="logo da marca" src={logo} />
          </figure>          
          <ul className="main-menu">
            <li className="menu-item">Home</li>
            <li className="menu-item">Categoria 1 <BsFillCaretDownFill className="icon" /></li>
            <li className="menu-item">Categoria 2 <BsFillCaretDownFill className="icon" /></li>
            <li className="menu-item">Contato</li>
          </ul>
          <div className="search-bar">
            <input              
              name="searchText" 
              className="search-bar-input" 
              type="search"
              placeholder="O que está procurando?"
              value={ searchText }
              onChange={ this.handleChange } 
            />
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