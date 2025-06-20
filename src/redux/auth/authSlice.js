import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './operations';
import { logOut } from './operations';
import { register } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    token: null,
    isLoading: true,
    user: {
      name: null,
      email: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
        };
      })
      .addCase(logIn.rejected, (state) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = {
          name: null,
          email: null,
        };
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = {
          name: null,
          email: null,
        };
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token; 
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
        };
      });
  },
});

export const authReducer = authSlice.reducer;
