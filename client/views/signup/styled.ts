import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  background-color: #24292e;
  color: #fff;
  flex-flow: row;
  align-items: center;
  height: 75px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  flex: auto;
  overflow: auto;
`;

export const SignupForm = styled(Form)`
  width: 350px;
  margin-top: 48px;
`;
