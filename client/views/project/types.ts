import { actions } from './duck';
import { RouteComponentProps } from 'react-router';

export interface ProjectStoreProps {
  data: any;
  selectedDate: string;
  loading: boolean;
}

export interface ProjectDispatchProps {
  fetch: typeof actions.fetch.started;
  selectDate: typeof actions.selectDate
}

export interface ProjectState {
  date: string
}

export interface DatePaginationProps {
  value: string
  onChange: (date: string) => void
}

export interface ProjectOwnProps extends RouteComponentProps<{ projectId: string }> {}
export interface ProjectProps extends ProjectStoreProps, ProjectDispatchProps, ProjectOwnProps {}
