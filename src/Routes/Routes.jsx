import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import Installation from '../Pages/Installation';
import Apps from '../Pages/Apps';
import AppDetails from '../Pages/AppDetails';
import AppNotFound from '../components/AppNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <AppNotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/installation',
        Component: Installation,
      },
      {
        path: '/app-details/:id',
        Component: AppDetails,
      },
      {
        path: '*',
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
