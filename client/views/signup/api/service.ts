import { client } from 'config/apollo';
import { gql } from 'apollo-boost';
import Signup from './signup.gql';
import { PersonCreateInput } from 'client/types/api';

export const signupMutation = async (data: PersonCreateInput) => {
  return client.mutate({
    mutation: gql(Signup),
    variables: {
      data,
    },
  });
};
