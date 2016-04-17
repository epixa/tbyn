'use strict';

import { reduxForm } from 'redux-form';

import AddAccountForm from '../../components/add-account/form';
import { changeAddAccountType, createAccount } from '../../actions/accounts';

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
  typeChangeHandler(type, onBudget) {
    return event => {
      const newType = event.target.value;

      onBudget.onChange(toOnBudgetValue(newType));
      type.onChange(event);

      dispatch(changeAddAccountType(newType));
    };
  },

  onSubmit(formData) {
    const [ month, day, year ] = formData.date.split('/');
    console.log(month, day, year);
    console.log(parseInt(month));
    const data = {
      ...formData,
      on_budget: Boolean(Number(formData.on_budget)),
      date: new Date(year, parseInt(month) - 1, day) // month is zero indexed
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

const dateSegment = (val) => {
  return val < 10 ? `0${val}` : `${val}`;
}

const dateForDisplay = (date = new Date()) => {
  const { day, month, year } = dateObj(date);
  return `${dateSegment(month)}/${dateSegment(day)}/${year}`;
}

const dateObj = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // month is 0 indexed
  const day = date.getDate();
  return { day, month, year };
}

export default reduxForm({
  form: 'add-account',
  fields: [ 'balance', 'date', 'name', 'on_budget', 'type' ],
  initialValues: {
    balance: '0.00',
    date: dateForDisplay()
  },
  validate
}, mapStateProps, mapDispatchProps)(AddAccountForm);
