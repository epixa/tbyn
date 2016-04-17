'use strict';

import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';
import DatePicker from 'react-datepicker';
import React, { PropTypes } from 'react';

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

    <label>
      Name
      <input type="text" {...name}/>
    </label>
    {name.touched && name.error && <div>{name.error}</div>}

    <label>
      Current Balance
      <input type="text" {...balance}/>
    </label>
    {balance.touched && balance.error && <div>{balance.error}</div>}

    <label>
      Date of Current Balance
      <input type="hidden" {...date} />
      <DatePicker readOnly={true} dateFormat="MM/DD/YYYY" selected={moment(date.value)} onChange={dateChangeHandler(date)} />
    </label>
    {date.touched && date.error && <div>{date.error}</div>}

    <label>
      Type
      <select {...type} onChange={typeChangeHandler(type, on_budget)}>
        <option value="">Select an Account Type...</option>
        <option value="checking">Checking</option>
        <option value="savings">Savings</option>
        <option value="credit_card">Credit Card</option>
        <option value="cash">Cash</option>
        <option value="other_credit">Line of Credit or Other Credit</option>
        <option value="paypal">Paypal</option>
        <option value="merchant">Merchant Account</option>
        <option value="investment">Investment Account</option>
        <option value="mortgage">Mortgage</option>
        <option value="other_asset">Other Asset (House, Car, etc)</option>
        <option value="other_loan">Other Loan or Liability</option>
      </select>
    </label>
    {submitFailed && type.touched && type.error && <div>{type.error}</div>}

    <label>
      <input type="radio" name="on_budget" {...on_budget} value="1" checked={on_budget.value === '1'}/>
      Budget account
      <span> - This account should affect my budget {budgetRecommended && <span>(recommended)</span>}</span>
    </label>
    <label>
      <input type="radio" name="on_budget" {...on_budget} value="0" checked={on_budget.value === '0'}/>
      Off-Budget
      <span> - This account should not affect my budget {offBudgetRecommended && <span>(recommended)</span>}</span>
    </label>
    {on_budget.touched && on_budget.error && <div>{on_budget.error}</div>}

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
