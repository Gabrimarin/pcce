import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.data.push(action.payload);
    },
    removeItem: (state, action) => {
      state.data.splice(action.payload, 1);
    }
  },
});

export const { changeForm, setForm } = dataSlice.actions;

export default dataSlice.reducer;
