import React, {useEffect, useState} from 'react';
import {SlBasket} from "react-icons/sl";
import {IoMdCart} from "react-icons/io";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
// import {CartProductContext} from "../ProductsContext/CartProductContext";



const Product = (name) => {

    const [amount, setAmount] = useState(1)
    
    const addProductToCart = () => {
        setAmount(amount+1);
    };

    const minus = () => {
        setAmount(amount-1);
    };

    const plus = () => {
        setAmount(amount+1);
    };
    // const {products} = useContext(CartProductContext);


    // const dispatch = useDispatch();
    //
    // const {
    //
    //     cart,
    //     currencies,
    //     currencySymbol,
    //     defaultCurrency,
    //     defaultSymbol,
    // } = useSelector((state) => state);
    //
    //
    // const inCartProduct = cart.find((item) => item.id === name.id);
    // const cost = (currencies[defaultCurrency] * name.price).toFixed(2);
    // const [notification, setNotification] = useState(false);
    //
    // const showNotification = (item) => {
    //     setNotification(item);
    //     setTimeout(() => {
    //         setNotification(false);
    //     }, 2000);
    // };
    //
    // useEffect(() => {}, [dispatch]);
    // // const {product}=name


    return (

        <div className="flex flex-col items-end bg-white shadow-1 p-5 w-[100%]
        py-5 rounded-lg mx-auto cursor-pointer hover:shadow-2xl transition
        text-left h-[350px]" key={name.name.product_id}>
            <div className=" w-[90%] h-1/2 items-center">
                <img className=" w-[85%] h-full" src={name.name.main_pair.detailed.image_path} alt="" />
            </div>
            <div className="text-left h-1/2 mt-3 ">
               <div className="text h-1/2">
                   <h2 className="text-sm">{name.name.product}</h2>
                   <p className="text-green-600">В наличии </p>
                   <h1 className="text-xl font-bold">{name.name.price} сом</h1>

               </div>
                <div className="btn flex gap-x-2 justify-center mt-3   h-1/2 py-5">
                    <button className="text-white p-1 px-5 text-sm rounded-full bg-gray-400 shadow-1 shadow-gray-700 flex justify-between gap-x-3 items-center"><button disabled={amount==0?true:false} onClick={() => setAmount(amount-1)}>-</button>{amount}<div  onClick={() => setAmount(amount+1)}>+</div></button>
                    <NavLink
                        to="/basket">
                        <button className="text-white p-1 px-2 text-sm rounded-full bg-blue-800 hover:bg-blue-600 shadow-1 shadow-blue-950 flex gap-x-2 items-center"><IoMdCart className="text-2xl "/>Купить</button>
                    </NavLink>
                </div>
            </div>
        </div>

    );
};

export default Product;