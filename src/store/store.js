import { configureStore } from "@reduxjs/toolkit";
import setCurrentCurrencies from "./slices/currentCurrenciesSlice";

const store = configureStore({
    reducer: {
        currencies: setCurrentCurrencies
    }
})

export default store;