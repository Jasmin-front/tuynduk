import {configureStore} from "@reduxjs/toolkit";
import addUsersSlice from "../addUsersSlice/addUsersSlice.js";
import securityServersReducer from "../SecurityServersReducer/securityServersReducer.js";
import serviceReducer from "../ServiceReducer/serviceReducer.jsx";

const store = configureStore({
    reducer:{
        user:addUsersSlice,
        securityServers: securityServersReducer,
        services:serviceReducer ,
    }
})

export default store;

