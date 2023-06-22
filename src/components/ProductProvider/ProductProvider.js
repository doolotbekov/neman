import React, {useContext, useEffect, useState} from 'react';
import {ProductContext} from "../ProductsContext/ProductsContext";
import {Link} from "react-router-dom";
import Product from "../Products/Product";
import Basket from "../Basket/Basket";
import {useDispatch, useSelector} from "react-redux";


const ProductProvider = () => {
    // const {products} = useContext(ProductContext);
    const dispatch = useDispatch();
    const { products } = useSelector((s) => s);

    useEffect(()=>{

    })

    return (
        <div className=" container ">
            <div className="flex justify-center flex-wrap items-center">
                {
                    products[0].map((item, index) => {

                        return (
                            <div key={index} className="  m-8 w-[20%]  ">
                                <Link to={'/'} key={index}>
                                    {/*<Product name={item} key={index} cartItems={cartItem} product={item}*/}
                                    {/*         addToCart={addToCart}/>*/}
                                </Link>

                            </div>
                        )
                    })}
            </div>
           {/*<Basket cartItems={cartItem}/>*/}

        </div>
    );
};

export default ProductProvider;