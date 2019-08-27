import * as React from 'react';
import { RootProps, RootState } from './types';
import { Container, Header, Content, Title } from './styled';
import { Icon, Header as SURHeader, Card, Button } from 'semantic-ui-react';
import { AddProjectModal } from './AddProjectModal';

export default class Root extends React.Component<RootProps, RootState> {
  constructor(props) {
    super(props);
    this.state = {
      addProjectOpen: false,
    };
  }
  render() {
    return (
      <Container>
        <Header>
          <Icon name="code" size="huge" />
        </Header>
        <Content>
          <Title>
            <SURHeader as="h2">Projects</SURHeader>
            <Button icon onClick={this.openAddProject}>
              <Icon name="plus" />
            </Button>
          </Title>
          <Card
            href="#card-example-link-card"
            header="Elliot Baker"
            meta="Friend"
            description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          />
        </Content>
        <AddProjectModal
          open={this.state.addProjectOpen}
          onConfirm={this.addProject}
          onCancel={this.cancelAddProject}
        />
      </Container>
    );
  }

  private openAddProject = () => {
    this.setState({ addProjectOpen: true })
  }

  private addProject = () => {
    this.setState({ addProjectOpen: false })
  };

  private cancelAddProject = () => {
    this.setState({ addProjectOpen: false })
  };
}
