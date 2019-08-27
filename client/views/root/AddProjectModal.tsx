import * as React from 'react';
import { AddProjectModalProps, AddProjectModalState } from './types';
import { Button, Modal, Header } from 'semantic-ui-react';

export class AddProjectModal extends React.Component<AddProjectModalProps, AddProjectModalState> {
  render() {
    return (
      <Modal open={this.props.open}>
        <Modal.Header>Create New Project</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={this.props.onCancel}>
            Cancel
          </Button>
          <Button positive icon="plus" labelPosition="right" content="Create" onClick={this.props.onConfirm} />
        </Modal.Actions>
      </Modal>
    );
  }
}
