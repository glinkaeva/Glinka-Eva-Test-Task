import { createSlice } from "@reduxjs/toolkit";

const currentProductSlice = createSlice({
    name: 'currentProduct',
    initialState: {
        currentProductId: null,
    },
    reducers: {
        setCurrentProduct(state, action) {
            state.currentProductId = action.payload
        },
    }
})

export const { setCurrentProduct }  = currentProductSlice.actions; 
export default currentProductSlice.reducer;