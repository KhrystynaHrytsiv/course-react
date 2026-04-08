import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../interfaces/IUser.ts";
import {generalService} from "../../services/apiService.ts";

type UsersSliceType ={
    users:IUser[],

}
const initialState : UsersSliceType= {
    users:[],
}

const getUsers = createAsyncThunk(
    'userSlice/getUsers',
    async (_, thunkAPI) =>{
        try {
            const users = await generalService<IUser[]>('users');
            return thunkAPI.fulfillWithValue(users)
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
);


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getUsers.fulfilled, (state, action:PayloadAction<IUser[]>) =>{
                state.users = action.payload
            })

});
const userAction = {...userSlice.actions, getUsers}
export {userSlice, userAction}