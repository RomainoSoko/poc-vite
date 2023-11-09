import Button from '../../cores/components/Button/Button';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../graphql/User/queries';
import { useEffect } from 'react';
import { UsersQueryType } from '../../entities/user/types';
import UsersTable from '../../entities/user/components/UsersTable';

export default function Home() {
  return <div className={'max-w-6xl mx-auto'}>bonjour</div>;
}
