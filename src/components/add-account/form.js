import 'react-datepicker/dist/react-datepicker.css';
import './form.css';

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
  <form onSubmit={handleSubmit} className="add-account-form">
    <div className="form-header">
      <h1>Create an account</h1>
    </div>

    <div className="form-vertical-rhythm">
      <Field name="name" component={TextField}>
        Name
      </Field>
    </div>

    <fieldset className="add-account-form-balance-fields form-vertical-rhythm">
      <div className="add-account-form-current-balance">
        <Field name="balance" component={TextField}>
          Current Balance
        </Field>
      </div>

      <div className="add-account-form-balance-date">
        <Field name="date" changeHandler={dateChangeHandler} component={DateField}>
          Date of Current Balance
        </Field>
      </div>
    </fieldset>

    <div className="form-vertical-rhythm">
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
    </div>

    <div className="form-vertical-rhythm">
      <Field name="on_budget" component={RadioBooleanField}>
        <span>
          <strong>Budget account</strong>
          <span> - This account should affect my budget</span>
        </span>
        <span>
          <strong>Off-Budget</strong>
          <span> - This account should not affect my budget</span>
        </span>
      </Field>
    </div>

    <div className="form-buttons">
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button type="submit" disabled={submitting}>
        {submitting ? <span>Creating account...</span> : <span>Create account</span>}
      </button>
    </div>
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
