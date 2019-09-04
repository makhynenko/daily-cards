import * as React from 'react';
import { RootProps, RootState, ConfirmPayload } from './types';
import { Title } from './styled';
import { Icon, Header, Card, Button } from 'semantic-ui-react';
import { AddProjectModal } from './AddProjectModal';

export default class Root extends React.Component<RootProps, RootState> {
  constructor(props) {
    super(props);
    this.state = {
      addProjectOpen: false,
    };
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <>
        <Title>
          <Header as="h2">Projects</Header>
          <Button icon onClick={this.openAddProject}>
            <Icon name="plus" />
          </Button>
        </Title>
        {this.props.data.map(p => (
          <Card
            onClick={() => this.props.history.replace(`project/${p.id}`)}
            header={p.title}
            meta="Project"
            description={p.description}
          />
        ))}

        <AddProjectModal
          open={this.state.addProjectOpen}
          onConfirm={this.addProject}
          onCancel={this.cancelAddProject}
        />
      </>
    );
  }

  private openAddProject = () => {
    this.setState({ addProjectOpen: true });
  };

  private addProject = (args: ConfirmPayload) => {
    this.props.addProject(args);
    this.setState({ addProjectOpen: false });
  };

  private cancelAddProject = () => {
    this.setState({ addProjectOpen: false });
  };
}
