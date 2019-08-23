import { RootStore } from './root/duck';
import { ListStore } from './list/duck'
 import { GlobalStore } from './duck';

export interface Store {
    list: ListStore;
    root: RootStore;
    global: GlobalStore;
}
