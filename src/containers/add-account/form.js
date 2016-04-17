'use strict';

import moment from 'moment';
import { reduxForm } from 'redux-form';

import AddAccountForm from '../../components/add-account/form';
import { cancelAddAccount, changeAddAccountType, createAccount } from '../../actions/accounts';

const validate = ({ balance, date, name, on_budget, type }) => {
  const errors = {};

  if (!name) errors.name = 'Name is required';

  if (!balance) errors.balance = 'Balance is required';

  if (!date) errors.date = 'Date is required';

  if (!on_budget) errors.on_budget = 'Budget status is required';

  if (!type) errors.type = 'Type is required';

  return errors;
};

const mapStateProps = (state, props) => {
  const onBudgetValue = toOnBudgetValue(state.addAccount.newAccountType);
  return {
    budgetRecommended: onBudgetValue === '1',
    offBudgetRecommended: onBudgetValue === '0'
  };
};

const mapDispatchProps = (dispatch, props) => ({
  dateChangeHandler(date) {
    return datePicker => {
      date.onChange(datePicker.format());
    };
  },

  typeChangeHandler(type, onBudget) {
    return event => {
      const newType = event.target.value;

      onBudget.onChange(toOnBudgetValue(newType));
      type.onChange(event);

      dispatch(changeAddAccountType(newType));
    };
  },

  handleCancel() {
    dispatch(cancelAddAccount());
  },

  onSubmit(formData) {
    const data = {
      ...formData,
      on_budget: Boolean(Number(formData.on_budget))
    };
    dispatch(createAccount(data));
  }
});

const toOnBudgetValue = (type) => {
  if (!type) return '';
  return budgetTypes.includes(type) ? '1' : '0';
};

const budgetTypes = [
  'checking',
  'savings',
  'credit_card',
  'cash',
  'other_credit',
  'paypal',
  'merchant'
];

export default reduxForm({
  form: 'add-account',
  fields: [ 'balance', 'date', 'name', 'on_budget', 'type' ],
  initialValues: {
    balance: '0.00',
    date: moment().format()
  },
  validate
}, mapStateProps, mapDispatchProps)(AddAccountForm);
