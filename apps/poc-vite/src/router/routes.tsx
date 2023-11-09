import { Navigate } from 'react-router-dom';
import LayoutWithMenu from '../entities/app/components/layouts/LayoutWithMenu';
import Home from '../teams/home/Home';

import { usersRoutes } from '../teams/user/routes';

export const routes = [
  {
    path: '*',
    element: <Navigate to={'/users'} />,
  },
  {
    path: '/',
    element: (
      <LayoutWithMenu>
        <Home />
      </LayoutWithMenu>
    ),
  },
  ...usersRoutes,
];
