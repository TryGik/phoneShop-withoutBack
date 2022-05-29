import React from 'react';

const SortPopup = React.memo(function SortPopup({ popupItems, onSelectSortBy, activePopupItem }) {
    // console.log('render SortPopUp')
    const [visabilityPopup, setVisabilityPopup] = React.useState(false);
    const activePopupLabel = popupItems.find(obj => obj.type === activePopupItem).name;

    const sortRef = React.useRef();

    const handlePopupClick = () => {
        setVisabilityPopup(!visabilityPopup);
    }

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            setVisabilityPopup(false);
        }
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    const changeActivePopup = (item) => {
        if (onSelectSortBy) {
            onSelectSortBy(item);
        }
        setVisabilityPopup(false);
    }

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">

                <b style={{ marginRight: '4px' }}>Сортировка по: </b>
                <span className="sort__category" onClick={() => handlePopupClick()}>{activePopupLabel}</span>
            </div>
            {visabilityPopup && <div className="sort__popup">
                <ul className='sort__popup_list'>
                    {popupItems && popupItems.map((item, index) =>
                        <li key={item.type + index}
                            className={`${activePopupItem === index ? 'sort__popup--active' : ''} sort__popup_item`}
                            onClick={() => changeActivePopup(item)}
                        >{item.name}</li>)}

                </ul>
            </div>}
        </div>
    )
})

export default SortPopup;