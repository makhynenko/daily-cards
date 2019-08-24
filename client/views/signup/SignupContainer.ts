import { connect } from 'react-redux';
import { actions } from './duck';
import { Signup } from './Signup';
import { SignupProps } from './types';

const mapDispatchToProps: SignupProps = {
  submit: actions.submit.started,
};

export default connect<null, SignupProps>(
  null,
  mapDispatchToProps
)(Signup);
