import * as React from 'react';
import { ProjectProps, ProjectState } from './types';
import { Title, Content } from './styled';
import { Header } from 'semantic-ui-react';
import { DatePagination } from './DatePagination';

export default class Project extends React.Component<ProjectProps, ProjectState> {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  componentDidMount() {
    this.props.fetch(this.props.match.params.projectId);
  }

  render() {
    return (
      <>
        <Title>
          <Header as="h2">{this.props.data && this.props.data.title}</Header>
        </Title>
        <Content>
          
        </Content>
        <DatePagination value={this.props.selectedDate} onChange={this.onDateChange} />
      </>
    );
  }

  private onDateChange = (date: string) => {
    this.props.selectDate(date)
  };
}
