'use strict';

import React from 'react';

const AddAccountForm = ({ fields, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label>
      Name
      <input type="text" {...fields.name} />
    </label>
    <button type="submit">
      Submit
    </button>
  </form>
);

export default AddAccountForm;
