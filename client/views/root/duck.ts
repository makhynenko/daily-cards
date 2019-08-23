import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { call, put } from 'redux-saga/effects';
import { safeTakeLatest } from '../../helpers/saga';
import { some } from './api/service';

const actionCreator = actionCreatorFactory('root');

const FETCH = 'FETCH';
const ADD_LIST = 'ADD_LIST';

export const actions = {
  fetch: actionCreator.async<void, any[]>(FETCH),
  addList: actionCreator<string>(ADD_LIST),
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

export function* saga() {
  yield safeTakeLatest(actions.fetch.started.type, fetch);
}
