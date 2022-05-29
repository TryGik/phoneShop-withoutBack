import React from 'react';
import '../style/index.css';
import '../style/cart.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems, selectTotalCount, selectTotalPrice, removePhoneCart } from '../redux/reducer/cartSlice';
import { CartItem } from '../components/';


function Cart() {
    const items = useSelector(selectItems);
    const totalCount = useSelector(selectTotalCount);
    const totalPrice = useSelector(selectTotalPrice);

    const dispatch = useDispatch();

    const removeHandleClick = (id) => {
        dispatch(removePhoneCart(id));
    }

    return (
        <div className="container">

            {items.length > 0
                ?
                <div>
                    <h2 className="cart__title">Корзина</h2>
                    <ul className="cart__list">
                        {items && items.map(item => <CartItem
                            key={item.id}
                            {...item}
                            removeHandleClick={removeHandleClick}
                        />)}
                    </ul>
                    <div className="cart__total">
                        <div className="total_item">Всего товаров: {totalCount}</div>
                        <div className="total_item">К оплате: {totalPrice} руб</div>
                    </div>
                    <div className="cart__footer_btn">
                        <Link to="/" className="footer__btn cart__back_btn click">Вернуться Назад</Link>
                        <button className="footer__btn cart__pay_btn click">Оплатить Заказ</button>
                    </div>
                </div>
                :
                <div>
                    <h2 className="cart__title">Корзина пуста</h2>
                    <div className='cart__empty'>
                        <img className='cart__empty_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMeqehQGv4EaKCCAfKNvEcrXJR25nsE9gyA&usqp=CAU" alt="empty cart" />
                    </div>
                    <div className="cart__footer_btn">
                        <Link to="/" className="footer__btn cart__back_btn click">Вернуться Назад</Link>
                    </div>
                </div>}
        </div>
    )
}

export default Cart