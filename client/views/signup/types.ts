import { actions } from './duck';

export interface SignupProps {
  submit: typeof actions.submit.started;
}

export interface SignupState {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
