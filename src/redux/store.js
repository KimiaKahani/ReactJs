import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { cardReducer } from "./cardReducer";

export const store = configureStore({
    reducer:{
        user:userReducer,
        card:cardReducer
    }
})