import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    uid: null,
    user: {
        userName: "null",
        displayName: null,
        email: null,
        avatar: null,
    },
    isLoggedIn: false
};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.uid = action.payload.uid;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.uid = null;
            state.user = {};
            state.isLoggedIn = false;
        },
        setUid : (state,action) =>{
            state.uid = action.payload.uid;
        }
    },
});

export const { login, logout, setUid } = userSlice.actions;

export default userSlice.reducer;