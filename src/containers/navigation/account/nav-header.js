import { connect } from 'react-redux';

import AccountNavHeader from '../../../components/navigation/account/nav-header';

const mapStateProps = (state, props) => ({
  collapsed: state.navigation.collapsed[props.type],
  truncated: state.navigation.truncated,
});

export default connect(mapStateProps)(AccountNavHeader);
