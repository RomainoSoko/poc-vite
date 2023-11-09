import UsersTable from '../../entities/user/components/UsersTable';
import { Outlet, useLocation, matchPath } from 'react-router-dom';

export default function Users() {
  const location = useLocation();

  const isUsersRoute = matchPath({ path: '/users' }, location.pathname);

  return (
    <>
      {isUsersRoute ? (
        <div className={'mx-auto max-w-6xl'}>
          <UsersTable className={'w-full'} />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}
