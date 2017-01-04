import 'react-datepicker/dist/react-datepicker.css';

import React, { PropTypes } from 'react';
import { Field } from 'redux-form';

import DateField from '../form/date-field';
import RadioBooleanField from '../form/radio-boolean-field';
import SelectField from '../form/select-field';
import TextField from '../form/text-field';

const AddAccountForm = ({
  handleCancel,
  handleSubmit,
  submitting,
  submitFailed,
  dateChangeHandler,
}) => (
  <form onSubmit={handleSubmit}>
    {submitFailed && <div>There was an error with your form submission</div>}

    <Field name="name" component={TextField}>
      Name
    </Field>

    <Field name="balance" component={TextField}>
      Current Balance
    </Field>

    <Field name="date" changeHandler={dateChangeHandler} component={DateField}>
      Date of Current Balance
    </Field>

    <Field
      name="type"
      allowRenderError={submitFailed}
      component={SelectField}
      options={{
        '': 'Select an Account Type...',
        checking: 'Checking',
        savings: 'Savings',
        credit_card: 'Credit Card',
        cash: 'Cash',
        other_credit: 'Line of Credit or Other Credit',
        paypal: 'Paypal',
        merchant: 'Merchant Account',
        investment: 'Investment Account',
        mortgage: 'Mortgage',
        other_asset: 'Other Asset (House, Car, etc)',
        other_loan: 'Other Loan or Liability',
      }}
    >
      Type
    </Field>

    <Field name="on_budget" component={RadioBooleanField}>
      <span>
        Budget account
        <span> - This account should affect my budget</span>
      </span>
      <span>
        Off-Budget
        <span> - This account should not affect my budget</span>
      </span>
    </Field>

    <button type="button" onClick={handleCancel}>
      Cancel
    </button>
    <button type="submit" disabled={submitting}>
      {submitting ? <span>Submitting...</span> : <span>Submit</span>}
    </button>
  </form>
);

AddAccountForm.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  submitFailed: PropTypes.bool.isRequired,
  dateChangeHandler: PropTypes.func.isRequired,
};

export default AddAccountForm;
