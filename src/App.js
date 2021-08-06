import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner title='Hola soy una prop! ' descr="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' s standard dummy text ever since the 1500s, when an unknown printer took a galley" />
    </div>
  );
}

export default App;
