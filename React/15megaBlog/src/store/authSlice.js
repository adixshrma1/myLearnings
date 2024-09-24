import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  state: false,
  userData: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.state = true;
            state.userData = action.payload;
        },
        logout: (state, action) => {
            state.state = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;