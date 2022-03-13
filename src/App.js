
import './App.css';
import { Filter } from './component/Filter';
import { Home } from './component/Home';
import { Navbar } from './component/Navbar';
import { Product } from './component/Product';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Home/>
   <Filter/>
   <Product/>
    </div>
  );
}

export default App;
