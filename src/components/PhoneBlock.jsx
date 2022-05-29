import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

function PhoneBlock({ name, imageUrl, ram, hdd, price, addPhoneToCart, priceArr }) {
    // console.log('render PhoneBlock')

    const [ramState, setRamState] = useState(ram[0]);
    const [hddState, setHddState] = useState(hdd[0]);

    const availiableRam = [4, 6, 8];
    const availiableHdd = [64, 128, 256];

    const onSelectRam = (item) => {
        const i = ram.indexOf(item);
        setRamState(ram[i]);
    }

    const onSelectHdd = (item) => {
        const i = hdd.indexOf(item);
        setHddState(hdd[i]);
    }

    const currentItemPrice = (ram, hdd, priceArr) => {
        const param = `${ram}/${hdd}`;
        for (let key of priceArr) {
            if (Object.keys(key)[0] === param) {
                return Object.values(key)[0];
            }
        }
    }

    const addPhone = (id) => {
        const obj = {
            id,
            name,
            imageUrl,
            ram: ramState,
            hdd: hddState,
            price: currentItemPrice(ramState, hddState, priceArr)
        }
        addPhoneToCart(obj);
    }

    return (
        <li className="content__item">
            <img className="item__img" src={imageUrl} alt="there is phone" />
            <div className="item__price"> от {price} руб.</div>
            <div className="item__descr">
                <p className="item__descr--text">{name}</p>
            </div>
            <div className="item__mamory">
                {availiableRam.map((item, index) =>
                    <button
                        key={item + index}
                        onClick={() => onSelectRam(item)}
                        className={classNames('item__mamory--btn', {
                            'active': ramState === item,
                            'disable': !ram.includes(item),
                        })}
                    >{item} ГБ</button>
                )}
            </div>
            <div className="item__mamory">
                {availiableHdd.map((item, index) =>
                    <button
                        key={item + index}
                        onClick={() => onSelectHdd(item)}
                        className={classNames('item__mamory--btn', {
                            'active': hddState === item,
                            'disable': !hdd.includes(item),
                        })}
                    >{item} ГБ</button>
                )}
            </div>
            <div className="item__buy">
                <Link className="item__buy--link" to="/about">Подробнее</Link>
                <button className="item__buy--btn" onClick={() => addPhone(Date.now())}>Купить</button>
            </div>
        </li>
    )
}

export default PhoneBlock