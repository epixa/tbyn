'use strict';

import 'react-datepicker/dist/react-datepicker.css';

import React, { PropTypes } from 'react';

import DateField from '../form/date-field';
import RadioBooleanField from '../form/radio-boolean-field';
import SelectField from '../form/select-field';
import TextField from '../form/text-field';

const AddAccountForm = ({
  fields: { balance, date, name, on_budget, type },
  handleCancel,
  handleSubmit,
  submitting,
  submitFailed,
  dateChangeHandler,
  typeChangeHandler,
  budgetRecommended,
  offBudgetRecommended
}) => {return (
  <form onSubmit={handleSubmit}>
    {submitFailed && <div>There was an error with your form submission</div>}

    <TextField field={name}>
      Name
    </TextField>

    <TextField field={balance}>
      Current Balance
    </TextField>

    <DateField field={date} changeHandler={dateChangeHandler}>
      Date of Current Balance
    </DateField>

    <SelectField
      field={type}
      changeHandler={type => typeChangeHandler(type, on_budget)}
      allowRenderError={submitFailed}
      options={{
        "": "Select an Account Type...",
        "checking": "Checking",
        "savings": "Savings",
        "credit_card": "Credit Card",
        "cash": "Cash",
        "other_credit": "Line of Credit or Other Credit",
        "paypal": "Paypal",
        "merchant": "Merchant Account",
        "investment": "Investment Account",
        "mortgage": "Mortgage",
        "other_asset": "Other Asset (House, Car, etc)",
        "other_loan": "Other Loan or Liability"
      }}>
      Type
    </SelectField>

    <RadioBooleanField field={on_budget}>
      <span>
        Budget account
        <span> - This account should affect my budget {budgetRecommended && <span>(recommended)</span>}</span>
      </span>
      <span>
        Off-Budget
        <span> - This account should not affect my budget {offBudgetRecommended && <span>(recommended)</span>}</span>
      </span>
    </RadioBooleanField>

    <button onClick={handleCancel}>
      Cancel
    </button>
    <button type="submit" disabled={submitting}>
      {submitting ? <span>Submitting...</span> : <span>Submit</span>}
    </button>
  </form>
)};

AddAccountForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  dateChangeHandler: PropTypes.func.isRequired,
  typeChangeHandler: PropTypes.func.isRequired,
  budgetRecommended: PropTypes.bool,
  offBudgetRecommended: PropTypes.bool
};

export default AddAccountForm;
