import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    loading: false,
    error: null
};

export const addUsersAsyncData = createAsyncThunk(
    'users/addUsersAsyncData',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://656db53ebcc5618d3c23cb54.mockapi.io/todo/something/registroin', userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const asyncGetData = createAsyncThunk(
    'users/asyncGetData',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.get('https://656db53ebcc5618d3c23cb54.mockapi.io/todo/something/registroin');
            dispatch(addUsersState(response.data));
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsersState: (state, action) => {
            state.users = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUsersAsyncData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addUsersAsyncData.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(addUsersAsyncData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { addUsersState } = usersSlice.actions;
export default usersSlice.reducer;
