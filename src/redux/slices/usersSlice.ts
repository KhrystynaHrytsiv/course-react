import {createAsyncThunk, createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../interfaces/IUser.ts";

type UsersSliceType ={
    users:IUser[],
    user:IUser | null,
    loadState:boolean
}
const initialState : UsersSliceType= {
    users:[],
    user: null,
    loadState:false
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) =>{
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json());
            // thunkAPI.dispatch(userAction.changeLoadState(true))
            return thunkAPI.fulfillWithValue(users);
            // throw new Error('sdc')
        } catch (e){
            console.log(e);
            return thunkAPI.rejectWithValue('error')
        }
    })
const getUser = createAsyncThunk(
    'userSlice/getUser',
    async (id:string, thunkAPI) =>{
        try {
            const user = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
                .then(response => response.json());
            // thunkAPI.dispatch(userAction.changeLoadState(true))
            return thunkAPI.fulfillWithValue(user);
            // throw new Error('sdc')
        } catch (e){
            console.log(e);
            return thunkAPI.rejectWithValue('error')
        }
    })
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        changeLoadState:(state, action:PayloadAction<boolean>) =>{
            state.loadState = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) =>{
            state.users = action.payload
            })
            .addCase(loadUsers.rejected, (state, action)=>{
                console.log(state);
                console.log(action);
            })
            .addCase(getUser.fulfilled, (state, action:PayloadAction<IUser>) =>{
                state.user = action.payload
            })
            .addMatcher(isFulfilled(loadUsers, getUser), state => {
                state.loadState = true;
            })
            .addMatcher(isRejected(loadUsers, getUser), state => {
                console.log(state);
            })
});
const userAction = {...userSlice.actions, loadUsers, getUser}
export {userSlice, userAction}