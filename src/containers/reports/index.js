import { connect } from 'react-redux';

import Reports from '../../components/reports';

const mapStateProps = state => ({
  active: state.navigation.currentPanel === 'reports',
});

export default connect(mapStateProps)(Reports);
