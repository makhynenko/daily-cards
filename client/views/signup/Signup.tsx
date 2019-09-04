import * as React from 'react';
import { SignupProps, SignupState } from './types';
import { SignupForm } from './styled';
import { Form, Checkbox, Button } from 'semantic-ui-react';

export class Signup extends React.Component<SignupProps, SignupState> {
  constructor(props) {
    super(props);
    this.state = {
      confirmPassword: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      username: '',
    };
  }

  private onSubmit = () => {
    const { username, password, lastName, firstName, email } = this.state;
    this.props.submit({
      email,
      firstName,
      lastName,
      password,
      username,
    });
  };

  private onChangeEmail = e => {
    this.setState({
      email: e.target.value,
    });
  };

  private onChangeUsername = e => {
    this.setState({
      username: e.target.value,
    });
  };

  private onChangeFirstName = e => {
    this.setState({
      firstName: e.target.value,
    });
  };

  private onChangeLastName = e => {
    this.setState({
      lastName: e.target.value,
    });
  };

  private onChangePassword = e => {
    this.setState({
      password: e.target.value,
    });
  };

  private onChangeConfirmPassword = e => {
    this.setState({
      confirmPassword: e.target.value,
    });
  };

  render() {
    const { username, password, lastName, firstName, email, confirmPassword } = this.state;
    return (
      <SignupForm>
        <Form.Field>
          <label>Username</label>
          <input placeholder="Username" value={username} onChange={this.onChangeUsername} />
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" value={firstName} onChange={this.onChangeFirstName} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" value={lastName} onChange={this.onChangeLastName} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" value={email} onChange={this.onChangeEmail} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" type="password" value={password} onChange={this.onChangePassword} />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={this.onChangeConfirmPassword}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit" onClick={this.onSubmit}>
          Submit
        </Button>
      </SignupForm>
    );
  }
}
