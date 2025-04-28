import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchForests = createAsyncThunk(
    'forest/fetchForests',
    async (query = '', { rejectWithValue }) => {
        try {
            const url = query.length >= 3
                ? `http://localhost:6003/api/forests/name/${query.toLowerCase()}`
                : `http://localhost:6003/api/forests/name/`;
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const res = await fetch(url, options);
            const response = await res.json();
            if (response?.data?.forests) {
                return response.data.forests;
            }
            return [];
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const forestSlice = createSlice({
    name: 'forest',
    initialState: {
        searchTerm: '',
        forestData: null,
        loading: false,
        error: null,
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        clearSearch: (state) => {
            state.searchTerm = '';
            state.forestData = null;
            state.error = null;
        },
        setforestData: (state, action) => {
            state.forestData = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchForests.pending, (state) => {
    //             state.loading = true;
    //             state.error = null;
    //         })
    //         .addCase(fetchForests.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.forestData = action.payload;
    //         })
    //         .addCase(fetchForests.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.payload;
    //             state.forestData = [];
    //         });
    // },
});

export const { setSearchTerm, clearSearch, setforestData } = forestSlice.actions;
export default forestSlice.reducer;