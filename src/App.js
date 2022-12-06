import logo from './logo.svg';
import './Style.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <>
    <NavBar/>
    <main className="shop">
      <ItemListContainer greet={'Productos Disponibles'}/>
    </main>
    
    </>
    
    

  );
}

export default App;
