import { createSlice } from "@reduxjs/toolkit";

const currentCurrenciesSlice = createSlice({
    name: 'currentCurrenciesSlice',
    initialState: {
        currentCurrencies: '$',
    },
    reducers: {
        setCurrentCurrencies(state, action) {
            state.someState = action.payload
        },
    }
})

export const { setCurrentCurrencies }  = currentCurrenciesSlice.actions; 
export default currentCurrenciesSlice.reducer;