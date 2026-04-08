import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../interfaces/IPost.ts";
import {generalService} from "../../services/apiService.ts";


interface IState {
    posts:IPost[]
}
const initialState:IState ={
    posts:[]
};
const getPosts = createAsyncThunk(
    'postSlice/getPosts',
    async (_, thunkAPI) =>{
        try {
            const posts = await generalService<IPost[]>('posts');
            return thunkAPI.fulfillWithValue(posts)
        }catch (e) {
           return thunkAPI.rejectWithValue(e)
        }
    }
);
const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getPosts.fulfilled, (state, action:PayloadAction<IPost[]>) =>{
                state.posts = action.payload
            })
});

const postActions = {...postSlice.actions, getPosts}
export {postSlice, postActions}