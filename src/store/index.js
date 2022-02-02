import { configureStore } from '@reduxjs/toolkit';
import forms from './slices/forms';
import snackbar from './slices/snackbar';

export default configureStore({
  reducer: {
    forms: forms,
    snackbar: snackbar,
  }
})