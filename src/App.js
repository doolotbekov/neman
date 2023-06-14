
import './App.css';
import {Routes, Route} from "react-router-dom";
import Selects from "./components/Selects/Selects";
import Header from "./components/Header/Header";
import Cart from "./components/Carts/Cart";
import Products from "./components/Products/ProductsContext";
import Home from "./components/Home/Home";
import ProductContextProvider from "./components/Products/ProductsContext";

function App() {
  return (
    <div className="App">
        <Header/>
    <Home/>
        <ProductContextProvider>
            <Cart />
        </ProductContextProvider>
<Routes>
  <Route path={"/basket"} element={<Selects/>}/>
  <Route path={"/"} element={<Products/>}/>
  {/*<Route path={"/"} element={<Home/>}/>*/}
  {/*<Route path={"/"} element={<Cart/>}/>*/}
</Routes>
    </div>
  );
}

export default App;
