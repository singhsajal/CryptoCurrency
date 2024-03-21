import { configureStore } from '@reduxjs/toolkit';

import TradeReducer from './TradeReducer';
import TrendCoinData from './TrendCoinData';
import loginReducer from './loginSlice';

const store = configureStore({
    reducer: {
        TradeReducer: TradeReducer,
        TrendCoinData: TrendCoinData,
        login: loginReducer
    },
});

export default store;