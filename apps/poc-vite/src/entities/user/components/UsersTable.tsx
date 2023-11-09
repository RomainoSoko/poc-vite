import { useQuery } from '@apollo/client';
import { UsersQueryType } from '../types';
import { GET_USERS } from '../../../graphql/User/queries';
import Button from '../../../cores/components/Button/Button';
import { Link } from 'react-router-dom';

export interface Props {
  className: string;
}

export default function UsersTable({ className }: Props) {
  const { loading: isLoading, data: userData } =
    useQuery<UsersQueryType>(GET_USERS);

  return (
    <>
      {isLoading ? 'users are loading...' : null}
      {userData?.users.length ? (
        <table className={`${className}`}>
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>EMAIL</td>
              <td>PADDWORD</td>
              <td>LINK</td>
            </tr>
          </thead>
          <tbody>
            {userData.users.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.name}</td>
                <td>{o.email}</td>
                <td>{o.password}</td>
                <td>
                  <Link to={`/users/${o.id}`}>
                    <Button>Gooooooo</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </>
  );
}
