'use strict';

import '../../styles/add-account/add-account.scss';

import React from 'react';

import AddAccountButton from '../../containers/add-account/button';
import AddAccountForm from '../../containers/add-account/form';

const AddAccount = ({ active }) => (
  <div className="add-account">
    <AddAccountButton/>
    {active && <AddAccountForm/>}
  </div>
);

export default AddAccount;
