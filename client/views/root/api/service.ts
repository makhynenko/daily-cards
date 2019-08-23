import { client } from 'config/apollo';
import { gql } from 'apollo-boost';
import SomeGet from './someGet.gql';

export const some = async (id: string) => {
  return client.query({
    query: gql(SomeGet),
    variables: {
      id,
    },
  });
};
