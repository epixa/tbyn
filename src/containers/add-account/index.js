'use strict';

import { connect } from 'react-redux';

import AddAccount from '../../components/add-account';

const mapStateProps = state => {
  return { active: state.addAccount.active };
};

export default connect(mapStateProps)(AddAccount);
