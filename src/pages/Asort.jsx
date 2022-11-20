import React, {useEffect, useState} from 'react';
import Card from "../compontents/Card";
import axios from "axios";
import {useOutletContext} from "react-router-dom";


const Asort = () => {

    const [productBasket, setProductBasket] = useOutletContext()
    const [filterCategory, setFilterCategory] = useState(0)
    const [filter, setFilter] = useState([
        {id: 1, name: 'Суши бар'},
        {id: 2, name: 'Супы'},
        {id: 3, name: 'Салаты и Закуски'},
        {id: 4, name: 'Десерты'},
        {id: 5, name: 'Напитки'},
        {id: 6, name: 'Горячие блюда и гарниры'},
        {id: 7, name: 'Пица и бургеры'},
    ])
    const [product, setProduct] = useState([])

    async function fetchProduct() {
        const response = await axios.get('https://6378a8e37eb4705cf2717c2a.mockapi.io/items')
        setProduct(response.data)
    }

    useEffect(() => {
        fetchProduct()
    }, [])


    const onAddProduct = (...obj) => {
        setProductBasket([...productBasket ,...obj])
    }

    return (
        <div className='asort'>
            <ul className="filter">
                {
                    filter.map((item, idx) =>
                    <li key={item.id} onClick={() => setFilterCategory(idx)} className={filterCategory === idx ? 'active' : ''}>
                        <button>{item.name}</button>
                    </li>
                    )
                }
            </ul>
            <div className="content-list container">
                {
                    product.map((item, idx) =>
                        <Card
                            key={idx}
                            img={item.img}
                            title={item.title}
                            text={item.text}
                            price={item.price}
                            height={item.height}
                            item={item}
                            onPlus={(obj) => onAddProduct(obj)}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Asort;