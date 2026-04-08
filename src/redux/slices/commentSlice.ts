import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../interfaces/IComment.ts";
import {generalService} from "../../services/apiService.ts";

interface IState {
    comments:IComment[]
}
const initialState:IState = {
    comments:[]
};

const getComments = createAsyncThunk(
    'commentSlice/getComments',
    async (_, thunkAPI) =>{
        try {
             const comments = await generalService<IComment[]>('comments');
             return thunkAPI.fulfillWithValue(comments)
        } catch (e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)
const commentSlice = createSlice({
    name:'commentSlice',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(getComments.fulfilled, (state, action:PayloadAction<IComment[]>) =>{
                state.comments = action.payload
            })
    }
});

const commentActions = {...commentSlice.actions, getComments}

export {commentSlice, commentActions}