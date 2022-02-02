import { configureStore } from '@reduxjs/toolkit';
import forms from './slices/forms';

export default configureStore({
  reducer: {
    forms: forms,
  }
})