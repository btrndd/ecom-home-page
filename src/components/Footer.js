import React from 'react';
import './Footer.css';
import { IoMail } from 'react-icons/io5'
import { MdHeadsetMic } from 'react-icons/md'
import corebiz from '../img/corebiz.png';
import vtex from '../img/vtex.png';

class Footer extends React.Component {
  render() {
    return(
      <div className="footer">
        <div className="info">
          <h2>Localização</h2>
          <span className="line"></span>
          <p>Avenidade Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
        <div className="buttons">
          <button id="contato"><IoMail className="button-icon" /><p>ENTRE EM CONTATO</p></button>
          <button><MdHeadsetMic className="button-icon" /><p>FALE COM O NOSSO CONSULTOR ONLINE</p></button>
        </div>
        <div className="companies">
          <figure>
            <figcaption>Created by</figcaption>
            <img src={ corebiz } alt="logo corebiz" />
          </figure>
          <figure>
            <figcaption>Powered by</figcaption>
            <img src={ vtex } alt="logo vtex"/>
          </figure>
        </div>
      </div>
    )
  }
}

export default Footer;