import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { call, put } from 'redux-saga/effects';
import * as moment from 'moment';
import { safeTakeLatest } from '../../helpers/saga';
import { getProject } from 'api/projects';
import { ThenArg } from 'helpers/types';
import { GetProject_getProject } from 'client/types/api';

const actionCreator = actionCreatorFactory('project');

const FETCH = 'FETCH';
const SELECT_DATE = 'SELECT_DATE';

export const actions = {
  fetch: actionCreator.async<string, GetProject_getProject>(FETCH),
  selectDate: actionCreator<string>(SELECT_DATE),
};

export interface ProjectStore {
  data: any;
  selectedDate: string;
  loading: boolean;
}

const initialState: ProjectStore = {
  data: [],
  loading: false,
  selectedDate: moment().format('DD-MM-YYYY'),
};

export default reducerWithInitialState(initialState)
  .case(actions.fetch.started, state => ({
    ...state,
    loading: true,
  }))
  .case(
    actions.fetch.done,
    (state, { result }): ProjectStore => ({
      ...state,
      data: result,
      loading: false,
    })
  )
  .case(
    actions.selectDate,
    (state, selectedDate): ProjectStore => ({
      ...state,
      selectedDate,
    })
  );

function* fetch(action: ReturnType<typeof actions.fetch.started>) {
  const res: ThenArg<ReturnType<typeof getProject>> = yield call(getProject, {
    where: {
      id: action.payload,
    },
  });
  yield put(actions.fetch.done({ params: null, result: res.data.getProject }));
}

export function* saga() {
  yield safeTakeLatest(actions.fetch.started.type, fetch);
}
