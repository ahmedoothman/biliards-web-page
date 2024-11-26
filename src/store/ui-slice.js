import { createSlice } from '@reduxjs/toolkit';

const initialState = { testVisible: false, lang: 'en' };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.testVisible = !state.testVisible;
    },
    setLang(state, action) {
      state.lang = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
