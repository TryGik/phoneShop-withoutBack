import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        category: null,
        sortBy: {
            type: 'rating',
            order: 'desc'
        }
    },
    reducers: {
        setSortBy: (state, action) => {
            return {
                ...state,
                sortBy: action.payload
            }
        },
        setCategory: (state, action) => {
            return {
                ...state,
                category: action.payload
            }
        },
    }
});

export const { setSortBy, setCategory } = filtersSlice.actions;
export const selectSotBy = state => state.filters.sortBy;
export const selectCategory = state => state.filters.category;
export default filtersSlice.reducer;