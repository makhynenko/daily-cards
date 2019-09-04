import { connect } from 'react-redux';
import { actions } from './duck';
import Project from './Project';
import { Store } from '../types';
import { ProjectStoreProps, ProjectDispatchProps } from './types';

const mapDispatchToProps: ProjectDispatchProps = {
  fetch: actions.fetch.started,
  selectDate: actions.selectDate,
};

const mapStateToProps = (state: Store): ProjectStoreProps => ({
  data: state.project.data,
  selectedDate: state.project.selectedDate,
  loading: state.project.loading,
});

export default connect<ProjectStoreProps, ProjectDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Project);
