import React from 'react';
import arrow from '../assets/img/arrow.svg'
import sushiImahe from '../assets/img/sushi-foto.png'
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div className='mainPage'>
            <div className="content">
                <h1>Суши и Рамен на ваш вкус!</h1>
                <p>сдесь вы сможете попробовать возможно самые вкусные суши и самый чудесный рамен в своем городе.</p>
                <p> Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: постоянный количественный рост и сфера нашей активности играет определяющее значение.</p>
                <Link to='/sort' className='btn-order'>ЗАКАЗАТЬ <img src={arrow} alt=""/></Link>
            </div>
            <div className="image"><img src={sushiImahe} alt=""/></div>
        </div>
    );
};

export default Main;