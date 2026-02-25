
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const ThankYouPage = lazy(() => import('../pages/thank-you/page'));
const MeetJohnPage = lazy(() => import('../pages/meet-john/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/thank-you',
    element: <ThankYouPage />
  },
  {
    path: '/meet-john',
    element: <MeetJohnPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
