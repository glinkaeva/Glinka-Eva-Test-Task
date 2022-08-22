import { createSlice } from "@reduxjs/toolkit";

const addItemToCartSlice = createSlice({
    name: 'addItemToCartSlice',
    initialState: {
        id: 'null',
        name: 'null',
        price: '',
        size: '',
        color: '',
        capacity: '',
        amount: 1
    },
    reducers: {
        addInfo(state, action) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.price = action.payload.price;
            state.color = action.payload.color;
            state.size = action.payload.size;
            state.capacity = action.payload.capacity;
        },
        incrementCount(state) {
            state.amount = state.amount + 1
        },
        decrementCount(state) {
            if ( state.amount === 0 ) {
                state.id = null
            } else {
                state.amount = state.amount - 1
            }
        }
    }
})

export const { addInfo, incrementCount, decrementCount }  = addItemToCartSlice.actions; 
export default addItemToCartSlice.reducer;