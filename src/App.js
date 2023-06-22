import './App.css';
import {Routes, Route} from "react-router-dom";
import Products from "./components/ProductsContext/ProductsContext";
import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
