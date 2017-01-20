import { connect } from 'react-redux';

import Budget from '../../components/budget';

const mapStateProps = state => ({
  active: state.navigation.currentPanel === 'budget',
});

export default connect(mapStateProps)(Budget);
