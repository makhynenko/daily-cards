import { actions } from './duck';

export interface RootStoreProps {
  data: any[];
  loading: boolean;
}

export interface RootDispatchProps {
  fetch: typeof actions.fetch.started;
  addProject: typeof actions.addProject.started;
}

export interface RootProps extends RootStoreProps, RootDispatchProps {}

export interface RootState {
  addProjectOpen: boolean;
}
// ---------- AddProjectModal ----------

export interface AddProjectModalProps {
  open: boolean;
  onConfirm: (args: ConfirmPayload) => void; 
  onCancel: () => void;
}

export interface ConfirmPayload {
  title: string;
  description: string;
}

export interface AddProjectModalState {
  title: string;
  description: string;
}
