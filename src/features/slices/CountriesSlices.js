

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

//create the action
export const fetchPost = createAsyncThunk('postsList',  async(payload, {rejectWithValue, getState, dispatch})=>{
try{
const {data} = await axios.get('https://restcountries.com/v3.1/all');
return data; 
}catch(error){
return error?.response;
}
}
);

//slices
// initialState: {
//     loading: false,
//     post: [],
//     error: '',
// }

const postSlices = createSlice({
    name: 'post',
    initialState:{},
    extraReducers: (builder) => {
        //pendingsdtate
        builder.addCase(fetchPost.pending, state =>{
            state.loading = true;
        })

        //fulfilled
        builder.addCase(fetchPost.fulfilled, (state, action) =>{
            state.postsList = action.payload;
            state.loading = false;
        })

        //rejection
        builder.addCase(fetchPost.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        })
    },
});

export default postSlices.reducer;


