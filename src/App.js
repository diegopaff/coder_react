import logo from './logo.svg';
import './Style.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import Home from './routes/Home/Home.js';
import Store from './routes/Store/Store.js';
import ProductIdContainer from './routes/ProductId/ProductIdContainer.js';
import Categories from './routes/Categories/Categories.js';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Store" element={<Store />} />
        <Route exact path="/Store/:id" element={<ProductIdContainer />} />
        <Route exact path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
