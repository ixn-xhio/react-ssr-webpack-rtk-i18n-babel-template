import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk<any, void>('user/fetchUser', async () => {
  const response = await axios
    .get("http://react-ssr-api.herokuapp.com/users");
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: { entities: [], loading: 'idle' },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.entities = action.payload;
    });
  },
});

export default userSlice.reducer;