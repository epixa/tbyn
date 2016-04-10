'use strict';

import { reduxForm } from 'redux-form';

import AddAccountForm from '../../components/add-account/form';
import { createAccount, hideAddAccount } from '../../actions/accounts';

const validate = ({ name, on_budget, type }) => {
  const errors = {};

  if (!name) errors.name = 'Name is required';

  if (!on_budget) errors.on_budget = 'Budget status is required';

  if (!type) errors.type = 'Type is required';

  return errors;
};

const mapDispatchProps = dispatch => ({
  onSubmit(data) {
    data.on_budget = Boolean(Number(data.on_budget));
    dispatch(createAccount(data));
  }
});

export default reduxForm({
  form: 'add-account',
  fields: [ 'name', 'on_budget', 'type' ],
  validate
}, null, mapDispatchProps)(AddAccountForm);
