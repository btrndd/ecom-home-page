// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slideshow />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
