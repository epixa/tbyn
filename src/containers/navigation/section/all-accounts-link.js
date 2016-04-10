'use strict';

import { connect } from 'react-redux';

import SectionLink from '../../../components/navigation/section/link';

const mapDispatchProps = (dispatch, props) => ({
  onClick() {
    alert('navigate to transactions for all accounts');
  }
});

export default connect(null, mapDispatchProps)(SectionLink);