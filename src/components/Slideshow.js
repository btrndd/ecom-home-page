import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './Slideshow.css';
import slide1 from '../img/slide_1.jpg';
import { FaCircle } from 'react-icons/fa';

class Slideshow extends React.Component {
  render() {
    const slideImages = [slide1];
    const properties = {
      indicators: true,
      scale: 0.01,
      // eslint-disable-next-line 
      indicators: i => (<div className="indicator"><FaCircle /></div>),
      arrows: false,
      infinite: false,
      autoplay: false,
    }
    return (
      <div className="slideshow">
        <Slide {...properties}>
          <div className="each-slide">
            <div className="slide" style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>
                <h4>Olá, você quer fazer entrar de cabeça em desenvolvimento?</h4>
                <h2>front-end • back-end • mobile</h2>
              </span>
            </div>
          </div>
        </Slide>
      </div>
    )
  }
}

export default Slideshow;
