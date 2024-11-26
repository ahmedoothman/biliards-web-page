import { configureStore } from '@reduxjs/toolkit';

import { uiReducer } from './ui-slice';

const store = configureStore({
  reducer: { uiSlice: uiReducer },
});

export default store;
