'use strict';

import { reduxForm } from 'redux-form';

import AddAccountForm from '../../components/add-account/form';
import { createAccount, hideAddAccount } from '../../actions/accounts';

const validate = ({ name, on_budget }) => {
  const errors = {};

  if (!name) errors.name = 'Name is required';

  if (!on_budget) errors.on_budget = 'Budget status is required';

  return errors;
};

const strNumToBool = val => {
  return Boolean(Number(val));
}

const mapDispatchProps = dispatch => ({
  onSubmit({ name, on_budget }) {
    on_budget = strNumToBool(on_budget);
    dispatch(createAccount({ name, on_budget }));
  }
});

export default reduxForm({
  form: 'add-account',
  fields: [ 'name', 'on_budget' ],
  validate
}, null, mapDispatchProps)(AddAccountForm);
