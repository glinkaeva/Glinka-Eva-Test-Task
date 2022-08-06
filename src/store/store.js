import { configureStore } from "@reduxjs/toolkit";
import setCurrentCurrencies from "./slices/currentCurrenciesSlice";
import setCurrentProduct from "./slices/currentProductSlice";

const store = configureStore({
    reducer: {
        currencies: setCurrentCurrencies,
        product: setCurrentProduct,
    }
})

export default store;