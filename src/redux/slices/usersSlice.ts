import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../interfaces/IUser.ts";

type UsersSliceType ={
    users:IUser[]
}
const initialState : UsersSliceType= {
    users:[]
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        loadUsers: (state, action:PayloadAction<IUser[]>) =>{
            state.users = action.payload;
        }
    }
});
const userAction = {...userSlice.actions}
export {userSlice, userAction}