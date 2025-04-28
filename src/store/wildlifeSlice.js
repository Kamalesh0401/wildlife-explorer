// src/store/wildlifeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching animals
export const fetchAnimals = createAsyncThunk(
    'wildlife/fetchAnimals',
    async ({ searchTerm = '', filters = {} }, { rejectWithValue }) => {
        try {
            // Construct query parameters for search and filters
            const queryParams = new URLSearchParams();
            if (searchTerm.length >= 3) {
                queryParams.append('name', searchTerm.toLowerCase());
            }
            if (filters.species) queryParams.append('species', filters.species);
            if (filters.habitat) queryParams.append('habitat', filters.habitat);
            if (filters.conservationStatus) queryParams.append('conservationStatus', filters.conservationStatus);
            if (filters.diet) queryParams.append('diet', filters.diet);

            const url = `http://localhost:6003/api/animals${queryParams.toString() ? `?${queryParams}` : ''}`;
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const res = await fetch(url, options);
            const response = await res.json();
            if (response?.data?.animals) {
                return response.data.animals;
            }
            return [];
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const wildlifeSlice = createSlice({
    name: 'wildlife',
    initialState: {
        searchTerm: '',
        animalsData: null,
        loading: false,
        error: null,
        filters: {
            species: '',
            habitat: '',
            conservationStatus: '',
            diet: '',
        },
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setFilter: (state, action) => {
            const { key, value } = action.payload;
            state.filters[key] = value;
        },
        clearSearchAndFilters: (state) => {
            //state.searchTerm = '';
            state.filters = {
                species: '',
                habitat: '',
                conservationStatus: '',
                diet: '',
            };
            state.animalsData = null;
            state.error = null;
        },
        setAnimalsData: (state, action) => {
            state.animalsData = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchAnimals.pending, (state) => {
    //             state.loading = true;
    //             state.error = null;
    //         })
    //         .addCase(fetchAnimals.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.animalsData = action.payload;
    //         })
    //         .addCase(fetchAnimals.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.payload;
    //             state.animalsData = [];
    //         });
    // },
});

export const { setSearchTerm, setFilter, clearSearchAndFilters, setAnimalsData } = wildlifeSlice.actions;
export default wildlifeSlice.reducer;