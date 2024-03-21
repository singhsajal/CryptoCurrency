import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    yourState: false,
};

const yourSlice = createSlice({
    name: 'TradeReducer',
    initialState,
    reducers: {
        TradeModalVisible: (state, action) => {
            state.yourState = action.payload;
            console.log(state.yourState)
        },

    },
});

export const { TradeModalVisible } = yourSlice.actions;
export default yourSlice.reducer;