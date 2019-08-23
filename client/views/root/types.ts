import { actions } from './duck';

export interface RootStoreProps {
  data: any[];
  loading: boolean;
}

export interface RootDispatchProps {
  fetch: typeof actions.fetch.started;
  addList: typeof actions.addList;
}

export interface RootProps extends RootStoreProps, RootDispatchProps {}

export interface AddListProps {
    onConfirm: (name: string) => void
}