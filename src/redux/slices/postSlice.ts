import {createSlice} from "@reduxjs/toolkit";
import type {IPost} from "../../interfaces/IPost.ts";


interface IState {
    posts:IPost[]
}
const initialState:IState ={
    posts:[]
};
const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers:{}
});

export {postSlice}