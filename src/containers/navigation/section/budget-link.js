import { connect } from 'react-redux';

import SectionLink from '../../../components/navigation/section/link';

const mapDispatchProps = () => ({
  onClick() {
    alert('navigate to budget'); // eslint-disable-line no-alert
  },
});

export default connect(null, mapDispatchProps)(SectionLink);
