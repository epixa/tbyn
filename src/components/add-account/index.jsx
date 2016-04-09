'use strict';

import React from 'react';

import AddAccountButton from '../../containers/add-account/button';
import AddAccountForm from '../../containers/add-account/form';

const AddAccount = ({ active }) => (
  <div>
    <AddAccountButton/>
    {active && <AddAccountForm/>}
  </div>
);

export default AddAccount;
