import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/slices/CounterSlices";

const store = configureStore({
    reducer:{
        counter: counterReducer,
    },
});

export default store;