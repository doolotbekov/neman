
import './App.css';
import {Routes, Route} from "react-router-dom";
import Selects from "./components/Selects/Basket";
import Header from "./components/Header/Header";
import Products from "./components/ProductsContext/ProductsContext";
import ProductDetails from "./components/Pages/ProductDetails";

function App() {
  return (
    <div className="App">
        <Header/>
    {/*<Home/>*/}
    {/*    <ProductContextProvider>*/}
    {/*        <Cart />*/}
    {/*    </ProductContextProvider>*/}
<Routes>
  <Route path={"/basket"} element={<Selects/>}/>
  <Route path={"/"} element={<Products/>}/>
  <Route path={"/details/:id"} element={<ProductDetails/>}/>
  {/*<Route path={"/"} element={<Home/>}/>*/}
  {/*<Route path={"/"} element={<Cart/>}/>*/}
</Routes>
    </div>
  );
}

export default App;
