import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'addItemToCartSlice',
    initialState: {
        massItems: [],
        itemCount: 0,
    },
    reducers: {
        addToCart(state, action) {
            state.massItems.push(action.payload)
            state.itemCount = state.massItems.length
        }
    }
})

export const { addToCart }  = cartSlice.actions; 
export default cartSlice.reducer;