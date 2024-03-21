import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    latestId: 'bitcoin',
};

const latestIdSlice = createSlice({
    name: 'latestId',
    initialState,
    reducers: {
        setLatestId: (state, action) => {
            state.latestId = action.payload;
            console.log("id", state.latestId)
        },
    },
});

export const { setLatestId } = latestIdSlice.actions;
export default latestIdSlice.reducer;