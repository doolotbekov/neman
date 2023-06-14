import React, {createContext, useEffect, useState} from 'react';
import {data} from '../data'
import Cart from "../Carts/Cart";


export const ProductContext = createContext();
const ProductContextProvider = () => {
    const [products, setProducts] = useState([data])

    // console.log(products)

    useEffect(() => {
        const allProducts = products.map((product) => {
            // const image = product.main_pair.detailed.image_path
            return product
        })
        console.log(allProducts)
    }, [])
    return (
        <ProductContext.Provider value={{
            products,
            setProducts
        }}>
            <Cart/>
        </ProductContext.Provider>
    );
};
export default ProductContextProvider;