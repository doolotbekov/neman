import React, {useState} from 'react';
import {IoMdCart} from "react-icons/io";
// import {NavLink} from "react-router-dom";
//
// import {cartProductContext} from "../CartProductsContext";


const Product = (props) => {

    const cart = (id, name, price) => {
        props.cartItems(id, name, price)
    }
    const [notification, setNotification] = useState(false)
    const [amount, setAmount] = useState(1)

    const toCart = (id, name, price) => {

        props.addToCart(id, name, price)
    };

    const showNotification = (item) => {
        setNotification(item);
        setTimeout(() => {
            setNotification(false);
        }, 2000);
    };


    return (

        <div className="flex flex-col items-end bg-white shadow-1 p-5 w-[100%]
        py-5 rounded-lg mx-auto cursor-pointer hover:shadow-2xl transition
        text-left h-[350px]" key={props.name.product_id}>
            <div className=" w-[90%] h-1/2 items-center">
                <img className=" w-[85%] h-full" src={props.name.main_pair.detailed.image_path} alt=""/>
            </div>
            <div className="text-left h-1/2 mt-3 ">
                <div className="text h-1/2">
                    <h2 className="text-sm">{props.name.product}</h2>
                    <p className="text-green-600">В наличии </p>
                    <h1 className="text-xl font-bold">{props.name.price} сом</h1>

                </div>
                <div className="btn flex gap-x-2 justify-center mt-3   h-1/2 py-5">
                    <div
                        className="text-white p-1 px-5 text-sm rounded-full bg-gray-400 shadow-1
                         shadow-gray-700 flex justify-between gap-x-3 items-center">
                        <button disabled={amount=== 1 ? true : false } onClick={() =>
                            setAmount(amount - 1)}>-</button>
                        {amount}
                        <button onClick={() => setAmount(amount + 1)}>+</button>
                    </div>
                    <button onClick={() => toCart(props.name.product_id,
                        props.name.product, props.name.price)} className="text-white
                        p-1 px-2 text-sm rounded-full bg-blue-800 hover:bg-blue-600
                        shadow-1 shadow-blue-950 flex gap-x-2 items-center">
                        <IoMdCart className="text-2xl "/>Купить
                    </button>

                </div>
            </div>
        </div>

    );
};

export default Product;