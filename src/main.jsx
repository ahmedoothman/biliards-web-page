import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import styles from './main.module.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
import store from './store/index.js';
import { Provider } from 'react-redux';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
);
