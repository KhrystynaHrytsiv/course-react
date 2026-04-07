import {createSlice} from "@reduxjs/toolkit";
import type {IComment} from "../../interfaces/IComment.ts";

interface IState {
    comments:IComment[]
}
const initialState:IState = {
    comments:[]
};
const commentSlice = createSlice({
    name:'commentSlice',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
    }
});

export {commentSlice}