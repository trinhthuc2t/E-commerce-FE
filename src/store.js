import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/auth/authSlice"
import cartReducer from "./features/cart/cartSlice"
import itemToPayReducer from "./features/payItem/payItemSlice"
export default configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        itemToPay: itemToPayReducer,
    }
})