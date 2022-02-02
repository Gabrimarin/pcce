import { createSlice } from "@reduxjs/toolkit";

const generalInitialState = {
  officeNumber: "",
  agency: "",
  startDate: null,
  delegate: "",
  policeStation: "",
  file: "",
};

export const formsSlice = createSlice({
  name: "forms",
  initialState: {
    forms: {
      narrative: { state: {...generalInitialState}, label: "Narrativa" },
      crimeNews: { state: {...generalInitialState}, label: "Notícia Crime" },
      office: { state: {...generalInitialState}, label: "Ofício" },
    },
    currentForm: "narrative",
  },
  reducers: {
    changeForm: (state, action) => {
      state.currentForm = action.payload;
    },
    setForm: (state, action) => {
      state.forms[action.payload.form].state = action.payload.data;
    },
  },
});

export const { changeForm, setForm } = formsSlice.actions;

export default formsSlice.reducer;
