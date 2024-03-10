import {createSlice} from "@reduxjs/toolkit";

export const payItemSlice = createSlice({
    name: "itemToPay",
    initialState: {
        itemToPay: []
    },
    reducers: {
        addItemToPay: (state, action) => {
            state.itemToPay =  action.payload
        },
        editItemToPay: (state, action) => {
            state.itemToPay = action.payload
        },
        removeItemToPay: (state) => {
            state.itemToPay = []
        }

    }
})

export const {addItemToPay, editItemToPay,removeItemToPay} = payItemSlice.actions;
export default payItemSlice.reducer;