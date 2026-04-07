import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/usersSlice.ts";
import {commentSlice} from "./slices/commentSlice.ts";
import {postSlice} from "./slices/postSlice.ts";

export const store = configureStore({
    reducer:{
        userSlice:userSlice.reducer,
        postSlice:postSlice.reducer,
        commentSlice: commentSlice.reducer
    }
});

