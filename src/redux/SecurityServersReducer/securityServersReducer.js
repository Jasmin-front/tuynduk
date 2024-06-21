import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSecurityServers = createAsyncThunk(
    'securityServers/fetchSecurityServers',
    async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/catalog/security_servers/?format=json');
        return response.data;
    }
);

export const fetchSecurityServerById = createAsyncThunk(
    'securityServers/fetchSecurityServerById',
    async (id) => {
        const response = await axios.get(`http://127.0.0.1:8000/api/catalog/security_servers/${id}/?format=json`);
        return response.data;
    }
);

const securityServersSlice = createSlice({
    name: 'securityServers',
    initialState: {
        data: [],
        selectedServer: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSecurityServers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSecurityServers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchSecurityServers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchSecurityServerById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSecurityServerById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.selectedServer = action.payload;
            })
            .addCase(fetchSecurityServerById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default securityServersSlice.reducer;