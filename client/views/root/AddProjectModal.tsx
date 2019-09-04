import * as React from 'react';
import { AddProjectModalProps, AddProjectModalState } from './types';
import { Button, Modal, Form } from 'semantic-ui-react';

export class AddProjectModal extends React.Component<AddProjectModalProps, AddProjectModalState> {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      title: '',
    };
  }
  public render() {
    const { description, title } = this.state;
    return (
      <Modal open={this.props.open}>
        <Modal.Header>Create New Project</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>Title</label>
                <input value={title} onChange={this.onTitleChange} />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <textarea value={description} onChange={this.onDescriptionChange} />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={this.props.onCancel}>
            Cancel
          </Button>
          <Button positive icon="plus" labelPosition="right" content="Create" onClick={this.onConfirm} />
        </Modal.Actions>
      </Modal>
    );
  }

  private onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  private onDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  private onConfirm = () => {
    const { title, description } = this.state;
    this.props.onConfirm({ description, title });
  };
}
