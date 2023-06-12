
import './App.css';
import {Routes, Route} from "react-router-dom";
import Selects from "./components/Selects/Selects";
import Header from "./components/Header/Header";
import Cart from "./components/Carts/Cart";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
        <Header/>
<Routes>
  <Route path={"/basket"} element={<Selects/>}/>
  <Route path={"/"} element={<Products/>}/>
</Routes>
    </div>
  );
}

export default App;
