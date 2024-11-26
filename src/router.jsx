import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const App = lazy(() => import('./App.jsx'));
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
