import { RootStore } from './root/duck';
import { GlobalStore } from './duck';
import { ProjectStore } from './project/duck';

export interface Store {
  root: RootStore;
  global: GlobalStore;
  project: ProjectStore;
}
