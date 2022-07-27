import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/slices/CountriesSlices";

const store = configureStore({
    reducer:{
        post: postReducer,
    },
});

export default store;