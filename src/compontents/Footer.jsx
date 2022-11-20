import React from 'react';
import {NavLink} from "react-router-dom";
import logoImage from "../assets/img/logo.svg";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='navbar-wrapper'>
                <ul className="navbar">
                    <li><NavLink to='/'>Главная</NavLink></li>
                    <li><NavLink to='/sort'>Ассортимент</NavLink></li>
                    <li><NavLink to='/about'>О сервисе</NavLink></li>
                    <li><NavLink to='/contact'>Контакт</NavLink></li>
                </ul>
                <ul className="navbar">
                    <li><NavLink to='/OD'>О доставке</NavLink></li>
                    <li><NavLink to='/faq'>F.A.Q.</NavLink></li>
                    <li><NavLink to='/help'>Поддержка</NavLink></li>
                    <li><NavLink to='/vakan'>Вакансии курьера</NavLink></li>
                </ul>
            </div>
            <div className="footer__contact">
                <div className='footer__block-contact'>
                    <p>Телефон</p>
                    <div className="line"></div>
                    <h3>+380734165596</h3>
                </div>
                <div className='footer__block-contact'>
                    <p>Почта</p>
                    <div className="line"></div>
                    <h3>kirillfill2003@gmail.com</h3>
                </div>
            </div>
            <div className='footer__info'>
                <NavLink to='/' className="logo"><img src={logoImage} alt=""/></NavLink>
                <p>© 2022, sushiram</p>
                <NavLink to='politic' className='politic'>Политика конфиденциальности</NavLink>
            </div>
        </footer>
    );
};

export default Footer;