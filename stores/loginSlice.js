import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    userInfo: { name: null, email: null }
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUserLoggedIn(state, action) {
            state.isLoggedIn = action.payload;
            //console.log(isLoggedIn)
        },
        setUserInfo(state, action) {
            const { name, email } = action.payload;
            state.userInfo = { name, email };
            //console.log(userInfo)
        }
    }
});

export const { setUserLoggedIn, setUserInfo } = loginSlice.actions;
export default loginSlice.reducer;
