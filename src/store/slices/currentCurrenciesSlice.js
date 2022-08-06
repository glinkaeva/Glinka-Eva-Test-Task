import { createSlice } from "@reduxjs/toolkit";

const currentCurrenciesSlice = createSlice({
    name: 'currentCurrenciesSlice',
    initialState: {
        currentCurrencies: '$',
        currentCurrenciesIndex: 0,
    },
    reducers: {
        setCurrentCurrencies(state, action) {
            state.currentCurrencies = action.payload

            // TODO сделай нормально
            if(state.currentCurrencies === '$') state.currentCurrenciesIndex = 0
            else if(state.currentCurrencies === '£') state.currentCurrenciesIndex = 1
            else if(state.currentCurrencies === 'A$') state.currentCurrenciesIndex = 2
            else if(state.currentCurrencies === '¥' ) state.currentCurrenciesIndex = 3
            else if(state.currentCurrencies === '₽') state.currentCurrenciesIndex = 4
        },
    }
})

export const { setCurrentCurrencies }  = currentCurrenciesSlice.actions; 
export default currentCurrenciesSlice.reducer;