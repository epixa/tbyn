import moment from 'moment';

import { connect } from 'react-redux';
import { formValueSelector, reduxForm, reset } from 'redux-form';

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

const offBudgetTypes = ['investment', 'mortgage', 'other_asset', 'other_loan'];

const formSelector = formValueSelector('addAccount');

const mapStateProps = (state) => {
  const type = formSelector(state, 'type');
  if (type) {
    const recommendedOffBudget = offBudgetTypes.includes(type);
    return {
      recommendedAccountType: recommendedOffBudget
        ? 'off_budget'
        : 'on_budget'
    };
  }
  return {};
};

const mapDispatchProps = dispatch => ({
  dateChangeHandler(date) {
    return (datePicker) => {
      date.onChange(datePicker.format());
    };
  },

  handleCancel() {
    dispatch(cancelAddAccount());
    dispatch(reset('addAccount'));
  },

  onSubmit(formData) {
    const data = {
      ...formData,
      on_budget: Boolean(Number(formData.on_budget)),
    };
    dispatch(createAccount(data));
  },

  typeChangeHandler(change) {
    return (event, value) => {
      if (value) {
        change('on_budget', offBudgetTypes.includes(value) ? '0' : '1');
      } else {
        change('on_budget', '');
      }
    };
  },
});

const InitializedAddAccountForm = reduxForm({
  form: 'addAccount',
  initialValues: {
    balance: '0.00',
    date: moment().format(),
  },
  validate,
})(AddAccountForm);

export default connect(
  mapStateProps,
  mapDispatchProps
)(InitializedAddAccountForm);
