import React, {useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import logoImage from '../assets/img/logo.svg'
import Basket from "./Basket";
import Footer from "./Footer";

const Layout = () => {

    const [productBasket, setProductBasket] = useState([])
    const test = 0

    return (
        <div className='layout'>
            <header className='header'>
               <NavLink to='/' className="logo"><img src={logoImage} alt=""/></NavLink>
                <ul className="navbar">
                <li><NavLink to='/'>Главная</NavLink></li>
                <li><NavLink to='/sort'>Ассортимент</NavLink></li>
                <li><NavLink to='/about'>О сервисе</NavLink></li>
                <li><NavLink to='/contact'>Контакт</NavLink></li>
            </ul>

               <Basket
                   productBasket={productBasket}
                   setProductBasket={setProductBasket}
               />
            </header>

            <main className='main'>
                <Outlet context={[productBasket, setProductBasket]}/>
            </main>

            <Footer/>
        </div>

    );
};

export default Layout;