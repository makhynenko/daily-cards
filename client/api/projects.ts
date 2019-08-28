import { client } from 'config/apollo';
import { gql } from 'apollo-boost';
import CreateProjectMutation from './gql/createProject.gql';
import UpdateProjectMutation from './gql/updateProject.gql';
import { CreateProjectVariables, UpdateProjectVariables, CreateProject } from 'client/types/api';

export const createProject = (variables: CreateProjectVariables) => {
  return client.mutate<CreateProject>({
    mutation: gql(CreateProjectMutation),
    variables,
  });
};

export const updateProject = (variables: UpdateProjectVariables) => {
  return client.mutate({
    mutation: gql(UpdateProjectMutation),
    variables,
  });
};
