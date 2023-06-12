import React from 'react';
import logo from "../assets/img/logo.png"
import {GiHamburgerMenu} from "react-icons/gi";
import {BiSearch, BiUserCircle} from "react-icons/bi";
import {SlBasket} from "react-icons/sl";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="container flex justify-between  items-center py-3">
            <div className="img">
                <NavLink to={"/"}>
                    <img src={logo} alt="" className="w-48"/>
                </NavLink>
            </div>
            <div className="icon">
                <GiHamburgerMenu className="text-3xl"/>
            </div>
            <div className="search  flex items-center w-[850px] ">
                <div className="w-full">
                    <input type="search" placeholder="Искать товары"
                           className="input relative w-full focus:bg-white border border-gray-100 block focus:border-gray-400 rounded-full bg-gray-100  text-gray-600 px-3 py-2 "/>
                </div>

                <BiSearch className=" relative right-8 text-2xl"/>
            </div>
            <div className="icon flex items-center gap-x-4">
                <BiUserCircle className="text-3xl"/>
                <NavLink to={"/basket"}>
                    <SlBasket className="text-3xl"/>
                </NavLink>
            </div>

        </div>
    );
};

export default Header;