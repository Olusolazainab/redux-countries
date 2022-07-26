
import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    value: 0,
}
export const CounterSlices = createSlice({
name:'counter',
initialState,
reducers:{
    increment:(state, action) =>{
        state.value++;
    },
    decrement:(state, action) =>{
        state.value--;
    },
    incrementAmount:(state, action) =>{
        state.value += action.payload;
    },
},
});

export const {increment, decrement, incrementAmount} = CounterSlices.actions;
export default CounterSlices.reducer;