import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    items: [],
  },
  reducers: {
    addConfig(state, action) {
      state.items.push(action.payload);
    },
    updateConfig(state, action) {
      const index = state.items.findIndex((item) => item.name === action.payload.name);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
    deleteConfig(state, action) {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
  },
});

export const { addConfig, updateConfig, deleteConfig } = configSlice.actions;
export default configSlice.reducer;
