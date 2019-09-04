import { client } from 'config/apollo';
import { gql } from 'apollo-boost';
import CreateProjectMutation from './gql/createProject.gql';
import UpdateProjectMutation from './gql/updateProject.gql';
import GetProjectsQuery from './gql/getProjects.gql'
import GetProjectQuery from './gql/getProject.gql'
import { CreateProjectVariables, UpdateProjectVariables, CreateProject, GetProjectsVariables, GetProjects, GetProjectVariables, GetProject } from 'client/types/api';

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

export const getProjects = (variables: GetProjectsVariables) => {
  return client.query<GetProjects>({
    query: gql(GetProjectsQuery),
    variables,
  });
};

export const getProject = (variables: GetProjectVariables) => {
  return client.query<GetProject>({
    query: gql(GetProjectQuery),
    variables,
  });
};