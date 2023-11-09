import Users from '../Users';
import User from '../User';
import LayoutWithMenu from '../../../entities/app/components/layouts/LayoutWithMenu';

export const usersRoutes = [
  {
    name: 'users',
    path: '/users',
    element: (
      <LayoutWithMenu>
        <Users />
      </LayoutWithMenu>
    ),
    children: [
      {
        name: 'user',
        path: ':id',
        element: <User />,
      },
    ],
  },
];
