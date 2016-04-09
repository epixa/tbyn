'use strict';

import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import AddAccountForm from '../../components/add-account/form';
import { createAccount, hideAddAccount } from '../../actions/accounts';

const mapDispatchProps = (dispatch, props) => ({
  handleSubmit(e) {
    e.preventDefault();
    dispatch(createAccount({ name: props.fields.name.value }));
  }
});

export default reduxForm({
  form: 'add-account',
  fields: [ 'name' ]
})(connect(null, mapDispatchProps)(AddAccountForm));
