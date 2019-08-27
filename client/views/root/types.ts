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

export interface RootState {
  addProjectOpen: boolean;
}
// ---------- AddProjectModal ----------

export interface AddProjectModalProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface AddProjectModalState {
  name: string;
}
