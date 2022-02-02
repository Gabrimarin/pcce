import { createSlice } from "@reduxjs/toolkit";

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    open: false,
  },
  reducers: {
    closeSnack: (state, action) => {
      state.open = false;
    },
    openSnack: (state, action) => {
      state.open = true;
    }
  },
});

export const { closeSnack, openSnack } = snackbarSlice.actions;

export default snackbarSlice.reducer;
