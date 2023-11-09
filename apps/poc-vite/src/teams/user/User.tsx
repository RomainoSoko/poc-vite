import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../graphql/User/queries';
import { UserQueryType } from '../../entities/user/types';
import Button from '../../cores/components/Button/Button';

export default function User() {
  const { id } = useParams();

  const { data, loading } = useQuery<UserQueryType>(GET_USER, {
    variables: { id: Number(id) },
  });

  return (
    <div className={'max-w-7xl mx-auto'}>
      <div className={'flex flex-col gap-5'}>
        <Link to={'/users'}>
          <Button>Back</Button>
        </Link>
        {loading ? 'ça load' : null}
        {data && data.user ? `Page de ${data.user.name}` : null}
      </div>
    </div>
  );
}
