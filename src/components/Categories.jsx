import React from 'react';
import classNames from 'classnames';

const Categories = React.memo(function Categories({ activeCat, onClickCategory, categories }) {
    // console.log('render Categories')
    return (
        <ul className="category">
            <li
                className={classNames('category__item', {
                    'category__item--active': activeCat === null,
                })}
                onClick={() => onClickCategory(null)}
            >
                <button className="category__btn">
                    <div className="category--field"></div>
                    <div className="category--text">Все модели</div>
                </button>
            </li>
            {
                categories && categories.map((item, index) =>
                    <li
                        className={classNames('category__item', {
                            'category__item--active': activeCat === index,
                        })}
                        key={index + item}
                        onClick={() => onClickCategory(index)}
                    >
                        <button className="category__btn">
                            <div className="category--field"></div>
                            <div className="category--text">{item}</div>
                        </button>
                    </li>
                )
            }
        </ul >
    )
})

export default Categories;