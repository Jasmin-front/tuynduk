import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchService = createAsyncThunk(
    'Service/fetchService',
    async () => {
        const response = await fetch('http://127.0.0.1:8000/api/catalog/service/?format=json');
        const data = await response.json();
        return data;
    }
);

export const fetchServiceId = createAsyncThunk(
    'service/fetchServiceId',
    async (id) => {
        const response  = await fetch(`http://127.0.0.1:8000/api/catalog/service/${id}/?format=json`)
        const data = await response.json()
        console.log(data)
        return data
    }
)


const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        data: [],
        selectedService: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchService.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchService.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchService.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(fetchServiceId.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchServiceId.fulfilled, (state, action) => {
                state.selectedService = action.payload;
                state.status = 'succeeded'
            })
            .addCase(fetchServiceId.rejected, (state, action) => {
                state.error = action.error.message;
            })
    }
});

export default serviceSlice.reducer;
