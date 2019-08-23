import * as React from 'react';
import { RootProps } from './types';
import { Container, Header, Content } from './styled';
import { Icon } from 'semantic-ui-react';

export default class Root extends React.Component<RootProps> {
  render() {
    return (
      <Container>
        <Header>
          <Icon name="code" size="huge" />
        </Header>
        <Content>Hello World</Content>
      </Container>
    );
  }
}
