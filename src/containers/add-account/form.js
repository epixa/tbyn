import moment from 'moment';

import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';

import AddAccountForm from '../../components/add-account/form';
import { cancelAddAccount, createAccount } from '../../actions/accounts';

const validate = ({ balance, date, name, on_budget: onBudget, type }) => {
  const errors = {};

  if (!name) errors.name = 'Name is required';

  if (!balance) errors.balance = 'Balance is required';

  if (!date) errors.date = 'Date is required';

  if (!onBudget) errors.on_budget = 'Budget status is required';

  if (!type) errors.type = 'Type is required';

  return errors;
};

const mapDispatchProps = dispatch => ({
  dateChangeHandler(date) {
    return (datePicker) => {
      date.onChange(datePicker.format());
    };
  },

  handleCancel() {
    dispatch(cancelAddAccount());
    dispatch(reset('add-account'));
  },

  onSubmit(formData) {
    const data = {
      ...formData,
      on_budget: Boolean(Number(formData.on_budget)),
    };
    dispatch(createAccount(data));
  },
});

const InitializedAddAccountForm = reduxForm({
  form: 'add-account',
  initialValues: {
    balance: '0.00',
    date: moment().format(),
  },
  validate,
})(AddAccountForm);

export default connect(
  null,
  mapDispatchProps
)(InitializedAddAccountForm);
