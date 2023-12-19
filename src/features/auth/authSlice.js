import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        userLogin: localStorage.getItem("account") ? JSON.parse(localStorage.getItem("account")) : {}
    },
    reducers: {
        setUserLogin: (state, action) => {
            state.userLogin =  action.payload
        },
        editAccountRedux: (state, action) => {
            state.userLogin = action.payload
        },
        setLogout: (state) => {
            state.userLogin = {}
        }

    }
})

export const {setUserLogin, editAccountRedux,setLogout} = authSlice.actions;
export default authSlice.reducer;