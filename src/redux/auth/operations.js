import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://685269f30594059b23cd6a72.mockapi.io/api';

// when we are logged in we recive token
// now when we recive this token we need to add it to every operation

// to add this token

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const respons = await axios.post('/users', credentials);
      setAuthHeader(respons.data.token);
      return respons.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const respons = await axios.post('/users', credentials);
      setAuthHeader(respons.data.token);
      return respons.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk('/users', async (thunkAPI) => {
  try {
    clearAuthHeader();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
