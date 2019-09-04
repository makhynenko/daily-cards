import { connect } from 'react-redux';
import { actions } from './duck';
import Root from './Root';
import { Store } from '../types';
import { RootStoreProps, RootDispatchProps } from './types';

const mapDispatchToProps: RootDispatchProps = {
  fetch: actions.fetch.started,
  addProject: actions.addProject.started,
};

const mapStateToProps = (state: Store): RootStoreProps => ({
  data: state.root.data,
  loading: state.root.loading,
});

export default connect<RootStoreProps, RootDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Root);
