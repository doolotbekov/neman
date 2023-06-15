import React, {useContext} from 'react';
import {ProductContext} from "../ProductsContext/ProductsContext";
import {Link} from "react-router-dom";
import Product from "../Home/Product";

const Props = () => {
      const {products} = useContext(ProductContext);
    console.log(products.map((el)=>{
        return el.product_id
    }))

    return (
        <div className=" container ">
            <div className="flex justify-center flex-wrap items-center">
                {
                    products[0].map((product,index) => {
                        return(
                            <div key={product.product_id} className="  m-8 w-[20%]  ">
                                <Link to={'/'} key={index}>
                                <Product name={product} />
                                </Link>
                            </div>
                        )
                })}
            </div>
        </div>
    );
};

export default Props;