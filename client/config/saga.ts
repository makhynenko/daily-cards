import { all, fork } from 'redux-saga/effects';
import { saga as rootSaga } from '../views/root/duck';
import { saga as signupSaga } from '../views/signup/duck';
import { saga as projectSaga } from '../views/project/duck';
import { saga as globalSaga } from '../views/duck';

export default function* saga() {
  yield all([fork(rootSaga), fork(globalSaga), fork(signupSaga), fork(projectSaga)]);
}
