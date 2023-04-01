import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Product from './Component/Product/Product';
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header> <hr className="hr-style" />
        <Product></Product>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
