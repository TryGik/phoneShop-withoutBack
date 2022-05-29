import { createSlice } from "@reduxjs/toolkit";

const totalSum = (initial, arr) => {
    if (!arr) {
        return initial;
    } else {
        const result = arr.reduce((acc, val) => acc + val.price, initial);
        return result;
    }
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
        totalCount: 0
    },
    reducers: {
        addPhoneCart: (state, action) => {
            return {
                ...state,
                items: [...state.items, action.payload],
                totalPrice: totalSum(action.payload.price, state.items),
                totalCount: state.items.length + 1,
            }
        },
        removePhoneCart: (state, action) => {
            const removePrice = state.items.find(item => item.id === action.payload)
            const newItems = state.items.filter(item => item.id !== action.payload);

            console.log(newItems);
            console.log(action.payload)
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - removePrice.price,
                totalCount: state.items.length - 1,
            }
        }
    }

})

export const { addPhoneCart, removePhoneCart } = cartSlice.actions;
export const selectItems = state => state.cart.items;
export const selectTotalPrice = state => state.cart.totalPrice;
export const selectTotalCount = state => state.cart.totalCount;
export default cartSlice.reducer;

