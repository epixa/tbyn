'use strict';

import React from 'react';

import AccountLink from '../../../containers/navigation/account/link';

const AccountNavList = ({ accounts }) => (
  <div>
    {accounts.map(account =>
      <AccountLink key={account.get('id')} account={account} />
    )}
  </div>
);

export default AccountNavList;
