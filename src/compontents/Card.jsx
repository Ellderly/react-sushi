import React from 'react';

const Card = ({ onPlus, item}) => {

    const onClickPlus = () => {
        onPlus(item)
    }

    return (
        <div className='block-item'>
            <div className="img__item"><img src={item.img} alt=""/></div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className='other__item'>
                <div className="prices__item">
                    { item.price > 0
                        ? <div className="price__item">
                            {item.price} грн.
                        </div>
                        : ''
                    }
                    <div className={["height__item", item.price ? 'heightRed' : ''].join(' ')}>{item.height} грамм</div>
                </div>
                <button className='btn' onClick={onClickPlus}>ЗАКАЗАТЬ</button>
            </div>
        </div>
    );
};

export default Card;