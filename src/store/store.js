import { configureStore } from "@reduxjs/toolkit";
import setCurrentCurrencies from "./slices/currentCurrenciesSlice";
import { addInfo, incrementCount, decrementCount } from "./slices/addItemInfoSlice";
import addToCart from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        currencies: setCurrentCurrencies,
        infoAboutItem: {
            addInfo,
            incrementCount,
            decrementCount
        },
        cart: addToCart
    }
})

export default store;