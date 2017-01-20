import { connect } from 'react-redux';

import { navigateToBudget } from '../../../actions/navigation';
import SectionLink from '../../../components/navigation/section/link';

const mapDispatchProps = dispatch => ({
  onClick() {
    dispatch(navigateToBudget());
  },
});

export default connect(null, mapDispatchProps)(SectionLink);
