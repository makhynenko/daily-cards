import * as React from 'react';
import { Container, Header, Content } from './styled';
import { Icon } from 'semantic-ui-react';

const HeaderProvider: React.FC = (props) => {
    return (
      <Container>
        <Header>
          <Icon name="code" size="huge" />
        </Header>
        <Content>
          {props.children}
        </Content>
      </Container>
    );
}

export default HeaderProvider
