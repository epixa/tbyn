import { connect } from 'react-redux';

import AllAccountsLink from '../../../components/navigation/section/all-accounts-link';

const mapStateProps = state => ({
  truncated: state.navigation.truncated,
});

const mapDispatchProps = () => ({
  onClick() {
    alert('navigate to transactions for all accounts'); // eslint-disable-line no-alert
  },
});

export default connect(mapStateProps, mapDispatchProps)(AllAccountsLink);
