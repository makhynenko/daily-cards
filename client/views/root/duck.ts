import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { call, put } from 'redux-saga/effects';
import { safeTakeLatest, safeTakeEvery } from '../../helpers/saga';
import { some } from './api/service';
import { ConfirmPayload } from './types';
import { createProject } from 'api/projects';
import { ThenArg } from 'helpers/types';

const actionCreator = actionCreatorFactory('root');

const FETCH = 'FETCH';
const ADD_PROJECT = 'ADD_PROJECT';

export const actions = {
  fetch: actionCreator.async<void, any[]>(FETCH),
  addProject: actionCreator.async<ConfirmPayload, any>(ADD_PROJECT),
};

export interface RootStore {
  data: any[];
  loading: boolean;
}

const initialState: RootStore = {
  data: [],
  loading: false,
};

export default reducerWithInitialState(initialState)
  .case(actions.fetch.started, state => ({
    ...state,
    loading: true,
  }))
  .case(
    actions.fetch.done,
    (state, { result }): RootStore => ({
      ...state,
      data: result,
      loading: false,
    })
  );

function* fetch() {
  const res = yield call(some, '1');
  console.log(res.data);
  yield put(actions.fetch.done({ params: null, result: res.data }));
}

function* addProject(action: ReturnType<typeof actions.addProject.started>) {
  const res: ThenArg<ReturnType<typeof createProject>> = yield call(createProject, { data: action.payload });
  console.log(res.data.createProject);
}

export function* saga() {
  yield safeTakeLatest(actions.fetch.started.type, fetch);
  yield safeTakeEvery(actions.addProject.started.type, addProject);
}
