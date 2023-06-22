import React, {useState} from 'react';
import {BiCheckCircle} from 'react-icons/bi';

const Basket = ( props) => {


    const products = props.cartItems;
    console.log(props.cartItems)

    return (
        <div className="container">
            <h1 className="font-bold text-3xl text-left py-4">Содержимое корзины</h1>
            {products ?
                <ul>
                    {products.map(product => {
                        return <li key={ product.product_id }>{ product.product }</li>
                    })}
                </ul>
            : '' }
            <div className="flex justify-between bg-gray-100 py-4 px-2">
                <button className="bg-black text-white px-3 py-3 rounded-full">Продолжить покупки</button>
                <button className="bg-blue-600 text-white px-3 py-3 rounded-full flex items-center gap-x-2">
                    <BiCheckCircle className="text-2xl text-white"/> Оформить заказ
                </button>
            </div>
        </div>
    );
};

export default Basket;



