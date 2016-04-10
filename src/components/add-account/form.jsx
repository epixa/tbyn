'use strict';

import React, { PropTypes } from 'react';

const AddAccountForm = ({
  fields: { name, on_budget },
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
