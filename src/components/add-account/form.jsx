'use strict';

import React, { PropTypes } from 'react';

const AddAccountForm = ({
  fields: { name, on_budget, type },
  handleSubmit,
  submitting,
  submitFailed
}) => (
  <form onSubmit={handleSubmit}>
    {submitFailed && <div>There was an error with your form submission</div>}

    <label>
      Name
      <input type="text" {...name}/>
    </label>
    {name.touched && name.error && <div>{name.error}</div>}

    <label>
      Type
      <select {...type}>
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
    {type.touched && type.error && <div>{type.error}</div>}

    <label>
      <input type="radio" name="on_budget" {...on_budget} value="1" checked={on_budget.value === '1'}/>
      Budget account
      <span> - This account should affect my budget</span>
    </label>
    <label>
      <input type="radio" name="on_budget" {...on_budget} value="0" checked={on_budget.value === '0'}/>
      Off-Budget
      <span> - This account should not affect my budget</span>
    </label>
    {on_budget.touched && on_budget.error && <div>{on_budget.error}</div>}

    <button type="submit" disabled={submitting}>
      {submitting ? <span>Submitting...</span> : <span>Submit</span>}
    </button>
  </form>
);

AddAccountForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default AddAccountForm;
