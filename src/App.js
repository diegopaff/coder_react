import './Style.css';
import NavBar from './components/NavBar/NavBar.js'
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import Home from './routes/Home/Home.js';
import Store from './routes/Store/Store.js';
import ProductIdContainer from './routes/ProductId/ProductIdContainer.js';
import CartContainer from './routes/Cart/CartContainer';
import CategoryContainer from './routes/Category/CategoryContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';

import  { CartProvider } from './context/CartContext.js';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBarContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Store" element={<Store />} />
          <Route exact path="/Store/:id" element={<ProductIdContainer />} />
          <Route exact path="/Category/:category" element={<CategoryContainer />} />
          <Route exact path="/Cart" element={<CartContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>

  );
}

export default App;
