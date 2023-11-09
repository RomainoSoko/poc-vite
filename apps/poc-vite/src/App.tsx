// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './services';

import Home from './teams/home/Home';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

export function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
