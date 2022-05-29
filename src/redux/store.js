import { configureStore } from "@reduxjs/toolkit";
import phonesReducer from './reducer/phonesSlice';
import filtersReducer from './reducer/filtersSlice';
import cartReducer from './reducer/cartSlice';

export default configureStore({
    reducer: {
        phones: phonesReducer,
        filters: filtersReducer,
        cart: cartReducer,
    },
})