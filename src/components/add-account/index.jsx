'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { createAccount } from '../../actions/accounts';

const AddAccountForm = ({ fields, handleSubmit, showAddAccount }) => {
  if (showAddAccount) {
    return (
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
  }
  return <span></span>
};

const mapStateProps = state => {
  const { showAddAccount } = state.ui;
  return { showAddAccount };
};

const mapDispatchProps = (dispatch, ownProps) => ({
  handleSubmit(e) {
    e.preventDefault();
    dispatch(createAccount({ name: ownProps.fields.name.value }));
  }
});

export default reduxForm({
  form: 'add-account',
  fields: [ 'name' ]
})(connect(mapStateProps, mapDispatchProps)(AddAccountForm));
