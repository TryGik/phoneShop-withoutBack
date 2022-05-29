import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PhoneBlock, SortPopup, Categories, Slider, LoadingPhoneBlock } from '../components';
import { fetchPhones, selectPhones, selectIsLoaded } from '../redux/reducer/phonesSlice';
import { setCategory, setSortBy } from '../redux/reducer/filtersSlice';
import { addPhoneCart } from '../redux/reducer/cartSlice';

const categories = ['Xiaomi', 'Sumsung', 'Realme', 'Honor'];
const popupItems = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'размер экрана', type: 'name', order: "asc" }
];

function Home() {
    // console.log('render Home')
    const dispatch = useDispatch();
    const phones = useSelector(selectPhones);
    const isLoaded = useSelector(selectIsLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    React.useEffect(() => {
        dispatch(fetchPhones({ category, sortBy }));
    }, [dispatch, category, sortBy]);

    const onSelectCategory = React.useCallback(index => {
        dispatch(setCategory(index))
    }, [dispatch]);

    const onSelectSortBy = React.useCallback(type => {
        dispatch(setSortBy(type))
    }, [dispatch]);

    const addPhoneToCart = (obj) => {
        dispatch(addPhoneCart(obj))
    }

    return (

        <div className="container">
            <Slider />
            <Categories
                activeCat={category}
                onClickCategory={onSelectCategory}
                categories={categories} />
            <SortPopup
                popupItems={popupItems}
                activePopupItem={sortBy.type}
                onSelectSortBy={onSelectSortBy}
            />
            <div className="content" id='homepage-more'>
                <ul className="content__items">
                    {isLoaded ?
                        phones.map(item =>
                            <PhoneBlock
                                key={item.id + item.name}
                                {...item}
                                addPhoneToCart={addPhoneToCart} />)
                        :
                        Array(8).fill(0).map((_, index) => <LoadingPhoneBlock key={index} />)
                    }
                </ul>
            </div>
        </div >
    )
}

export default Home