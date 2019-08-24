import actionCreatorFactory from 'typescript-fsa';
import { call } from 'redux-saga/effects';
import { safeTakeLatest } from '../../helpers/saga';
import { signupMutation } from './api/service';
import { PersonCreateInput } from 'client/types/api';

const actionCreator = actionCreatorFactory('signup');

const SUBMIT = 'SUBMIT';

export const actions = {
  submit: actionCreator.async<PersonCreateInput, boolean>(SUBMIT),
};

function* submit(action: ReturnType<typeof actions.submit.started>) {
  const res = yield call(signupMutation, action.payload);
  console.log(res.data);

}

export function* saga() {
  yield safeTakeLatest(actions.submit.started.type, submit);
}
