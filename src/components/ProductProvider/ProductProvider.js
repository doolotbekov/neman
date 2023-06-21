import React, {useContext, useState} from 'react';
import {ProductContext} from "../ProductsContext/ProductsContext";
import {Link} from "react-router-dom";
import Product from "../Products/Product";
import Basket from "../Basket/Basket";


const ProductProvider = () => {
    const {products} = useContext(ProductContext);
    const [cartItem, setCartItem] = useState([]);


    const addToCart = (productId, productName, productPrice) => {
        console.log(productName);
        const productToAdd = {
            product_id: productId,
            product: productName,
            price: productPrice,

        };
        setCartItem([...cartItem, productToAdd]);
    };

    return (
        <div className=" container ">
            <div className="flex justify-center flex-wrap items-center">
                {
                    products[0].map((item, index) => {

                        return (
                            <div key={index} className="  m-8 w-[20%]  ">
                                <Link to={'/'} key={index}>
                                    <Product name={item} key={index} cartItems={cartItem} product={item}
                                             addToCart={addToCart}/>
                                </Link>

                            </div>
                        )
                    })}
            </div>
            <Basket cartItems={cartItem}/>

        </div>
    );
};

export default ProductProvider;