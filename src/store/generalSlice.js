import { createSlice } from '@reduxjs/toolkit';

const generalSlice = createSlice({
    name: 'general',
    initialState: {
        fromPage: '',
    },
    reducers: {
        setFromPage: (state, action) => {
            state.fromPage = action.payload;
        }
    }
});

export const { setFromPage } = generalSlice.actions;
export default generalSlice.reducer;