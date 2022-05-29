import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPhones = createAsyncThunk(
    'phones/fetchTodos',
    async function ({ category, sortBy }, { dispatch, rejectWithValue }) {
        try {
            const response = await fetch(`/phones?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`);
            // console.log(response)
            if (!response.ok) {
                throw new Error('Server Error!!!');
            }
            const data = await response.json();
            return dispatch(setPhones(data));
        }
        catch (error) {
            return rejectWithValue(error.message);
        }

    }
);

const phonesSlice = createSlice({
    name: 'phones',
    initialState: {
        items: [],
        isLoaded: false
    },
    reducers: {
        setPhones: (state, action) => {
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        },
    }
})

export const { setPhones } = phonesSlice.actions;
export const selectPhones = state => state.phones.items;
export const selectIsLoaded = state => state.phones.isLoaded;
export default phonesSlice.reducer;