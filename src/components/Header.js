import React from 'react';
import logo from '../img/logo.png';
import './Header.css';
import { FaSistrix } from 'react-icons/fa'

class Header extends React.Component {
  render() {
    return(
      <header>
        <figure className="logo">
          <img height="49" width="135" alt="logo da marca" src={logo} />
        </figure>
        <ul className="main-menu">
          <li className="menu-item">Home</li>
          <li className="menu-item">Categoria 1</li>
          <li className="menu-item">Categiria 2</li>
          <li className="menu-item">Contato</li>
        </ul>
        <div className="search-bar">
          <input name="search-bar" className="search-bar-input" type="search" value="" placeholder="O que está procurando?" />
          <FaSistrix />
        </div>
      </header>
    )
  }
}

export default Header;