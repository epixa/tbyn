import React, { PropTypes } from 'react';

import AddAccountButton from '../../containers/add-account/button';
import AddAccountForm from '../../containers/add-account/form';

const AddAccount = ({ active }) => (
  <div>
    <AddAccountButton />
    {active && <AddAccountForm />}
  </div>
);

AddAccount.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default AddAccount;
