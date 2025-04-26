import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching parks
export const fetchParks = createAsyncThunk(
    'park/fetchParks',
    async (query = '', { rejectWithValue }) => {
        try {
            const url = query.length >= 3
                ? `http://localhost:6005/api/parks/name/${query.toLowerCase()}`
                : `http://localhost:6005/api/parks/name/`;
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const res = await fetch(url, options);
            const response = await res.json();
            if (response?.data?.parks) {
                return response.data.parks;
            }
            return [];
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const parkSlice = createSlice({
    name: 'park',
    initialState: {
        searchTerm: '',
        parksData: [],
        loading: false,
        error: null,
        isSidebarOpen: false,
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        clearSearch: (state) => {
            state.searchTerm = '';
            state.parksData = [];
            state.error = null;
        },
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        setParksData: (state, action) => {
            state.parksData = action.payload;
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchParks.pending, (state) => {
    //             state.loading = true;
    //             state.error = null;
    //         })
    //         .addCase(fetchParks.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.parksData = action.payload;
    //         })
    //         .addCase(fetchParks.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.payload;
    //             state.parksData = [];
    //         });
    // },
});

export const { setSearchTerm, clearSearch, toggleSidebar, setParksData } = parkSlice.actions;
export default parkSlice.reducer;