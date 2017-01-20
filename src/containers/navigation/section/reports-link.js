import { connect } from 'react-redux';

import { navigateToReports } from '../../../actions/navigation';
import SectionLink from '../../../components/navigation/section/link';

const mapDispatchProps = dispatch => ({
  onClick() {
    dispatch(navigateToReports());
  },
});

export default connect(null, mapDispatchProps)(SectionLink);
