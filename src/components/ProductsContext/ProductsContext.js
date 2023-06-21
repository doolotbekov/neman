import React, {createContext, useState} from 'react';
import {data} from '../data'
import ProductProvider from "../ProductProvider/ProductProvider";


export const ProductContext = createContext();
const ProductContextProvider = () => {
    const [products, setProducts] = useState([data])

    return (
        <ProductContext.Provider value={{
            products,
            setProducts
        }}>
            <ProductProvider/>

        </ProductContext.Provider>
    );
};
export default ProductContextProvider;