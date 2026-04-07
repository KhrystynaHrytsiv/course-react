import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/usersSlice.ts";

export const store = configureStore({
    reducer:{
        users:userSlice.reducer
    }
});

