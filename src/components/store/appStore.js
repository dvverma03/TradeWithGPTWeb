import { configureStore } from "@reduxjs/toolkit";
import  coinReducer  from "./coinSlice";

const appStore = configureStore({
    reducer:{
        coin:coinReducer
    }
});

export default appStore;