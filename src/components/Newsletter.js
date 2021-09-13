import React from 'react';
import './Newsletter.css';

class Newsletter extends React.Component {
  render() {
    return(
      <div className="newsletter">
        <div className="news-text"><h2>Participe de nossas news com promoções e novidades!</h2></div>
        <form>
          <input placeholder="Digite seu nome"></input>
          <input placeholder="Digite seu email"></input>
          <button>Eu quero!</button>
        </form>
      </div>
    )
  }
}

export default Newsletter;