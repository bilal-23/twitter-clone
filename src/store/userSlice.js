import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    uid: null,
    user: {},
    isLoggedIn: false
};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        login: (state, action) => {
            state.uid = action.payload.uid;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.uid = null;
            state.user = {};
        }
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;