import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const arrayProductos = [
    { nombre: 'Computadora', precio: 50000, stock: 50},
    { nombre: 'Celular', precio: 20000, stock: 15},
  ];

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer productos={arrayProductos}/>
    </div>
  );
}

export default App;
