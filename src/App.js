import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Product from './Component/Product/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header> <hr className="hr-style" />
        <Product></Product>
      </header>
    </div>
  );
}

export default App;
