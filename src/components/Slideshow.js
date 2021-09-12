import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './Slideshow.css';
import slide1 from '../img/slide_1.jpg';
import slide2 from '../img/slide_3.jpg';
import slide3 from '../img/slide_4.jpg';
import { FaCircle } from 'react-icons/fa';

class Slideshow extends React.Component {
  render() {
    const slideImages = [slide1, slide2, slide3];
    const properties = {
      indicators: true,
      scale: 0.01,
      // eslint-disable-next-line 
      indicators: i => (<div className="indicator"><FaCircle /></div>),
      arrows: false,
    }

    return (
      <div className="slideshow">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
  }
}

export default Slideshow;