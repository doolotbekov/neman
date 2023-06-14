import React, {useContext} from 'react';
import {ProductContext} from "../Products/ProductsContext";
import Home from "../Home/Home";
import {Link} from "react-router-dom";

const Cart = () => {
      const {products} = useContext(ProductContext);
    console.log(products)

    return (
        <div className=" container flex flex-wrap">
            <div> knk,
                {
                    products.map((product,index) => {
                        return(
                            <div key={product.product_id}>
                                <Link to={'/'} key={index}>
                                <Home name={product} />
                                </Link>


                            </div>
                        )
                })}
            </div>
        </div>
    );
};

export default Cart;