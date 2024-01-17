import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "carts",
    initialState: {
        carts: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem('carts')) : {}
    },
    reducers: {
        addCart: (state, action) => {
            state.carts =  action.payload
        },
        editCart: (state, action) => {
            state.carts = action.payload
        },
        deleteCart: (state) => {
            state.carts = {}
        }

    }
})

export const {addCart, editCart,deleteCart} = cartSlice.actions;
export default cartSlice.reducer;