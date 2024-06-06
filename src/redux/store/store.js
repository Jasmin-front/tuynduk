import {configureStore} from "@reduxjs/toolkit";
import addUsersSlice from "../addUsersSlice/addUsersSlice.js";

const store = configureStore({
    reducer:{
        user:addUsersSlice,

    }
})

export default store;

