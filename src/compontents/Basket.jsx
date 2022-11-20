import React, {useEffect, useState} from 'react';
import basketImg from '../assets/img/basket.svg'

const Basket = ({productBasket ,setProductBasket}) => {

    const [priceSum, setPriceSum] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [priceBasket, setPriceBasket] = useState(0)

    let prodPrice = 0

    productBasket.forEach(e => {
        prodPrice += e.price
    })
    console.log(prodPrice)

    return (
        <div className='basket'>
            <div className="basket__head" onClick={() => setIsOpen(!isOpen)}>
                <div className="price">{priceBasket} грн.</div>
                <div className="block-basket">
                    {productBasket.length
                        ? <div className="block-basket-length">{productBasket.length}</div>
                        : ''
                    }
                    <img src={basketImg} alt="basket"/>
                </div>
                <div className={["basket__arrow", isOpen ? 'active' : ''].join(' ')}></div>
            </div>
            {isOpen &&
                <div className='basket__products'>
                    {
                        productBasket.length
                        ?     <h2>КОРЗИНА</h2>
                        :    <h2>ПУСТО</h2>
                    }
                    <div className="products">
                        {
                            productBasket.map((item , idx) =>
                                <div className='basket__card' key={idx}>
                                    <div className='image'>
                                        <img src={item.img} alt="image"/>
                                    </div>
                                    <div className="content">
                                        <h3>{item.title}</h3>
                                        <a href="/podrob">подробнее</a>
                                    </div>
                                    <div className="amount">
                                        <button className="btn plus">+</button>
                                        1
                                        <button className='btn minus'>-</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="basket__products-order">
                        <div className="basket__product-sum">
                            сумма - <span>{priceSum} грн</span>
                        </div>
                        <button onClick={() => {console.log(productBasket)}} className="btn" >оформить заказ</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Basket;