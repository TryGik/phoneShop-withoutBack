import React from 'react'

function CartItem({ id, name, imageUrl, ram, hdd, price, removeHandleClick }) {

    return (
        <li className="cart__item">
            <div>
                <img className="cart__item_img"
                    src={imageUrl}
                    alt=""></img>
            </div>
            <div className="cart__item_name">{name}</div>
            <div className="cart__item_mamory">{ram} GB</div>
            <div className="cart__item_mamory">{hdd} GB</div>
            <div className="cart__item_mamory">{price} руб</div>
            <button className="cart__item_delete click" onClick={() => removeHandleClick(id)}>Удалить</button>
        </li>
    )
}

export default CartItem;