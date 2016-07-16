import { connect } from 'react-redux';

import AccountNavHeader from '../../../components/navigation/account/nav-header';

const mapStateProps = state => ({
  truncated: state.navigation.truncated,
});

const mapDispatchProps = () => ({
  onClick() {
    alert('clicked header'); // eslint-disable-line no-alert
  },
});

export default connect(mapStateProps, mapDispatchProps)(AccountNavHeader);
