import { connect } from 'react-redux';

import { amountInAccounts } from '../../../../lib/data/transactions';
import AccountNav from '../../../components/navigation/account/nav';

const mapStateProps = (state, props) => ({
  collapsed: state.navigation.collapsed[props.type],
  total: amountInAccounts(state.transactions, props.accounts),
});

const mapDispatchProps = dispatch => ({
  headerClickHandler(type) {
    return () => {
      dispatch({
        name: type,
        type: 'TOGGLE_ACCOUNT_NAV',
      });
    };
  },
});

export default connect(mapStateProps, mapDispatchProps)(AccountNav);
