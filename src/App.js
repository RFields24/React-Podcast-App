import './App.css';
import Header from './components/header/Header.js';
import Carousel from './components/carousel/Carousel.js'
import Row from './components/row/Row.js'
import Explore from './components/explore/Explore.js'

function App() {
  return (
    <div className="App" id="app">
      <Header />
      <Carousel />
      <Row />
      <Explore />
      <Row />
      <Row />
    </div>
  );
}

export default App;
