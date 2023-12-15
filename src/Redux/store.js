import {createStore} from "@reduxjs/toolkit";
import {accountReducer} from "./reducers";

const store = createStore(accountReducer)
export default store;