'use strict';

import React from 'react';

import BudgetLink from './budget-link';
import ReportsLink from './reports-link';
import AllAccountsLink from './all-accounts-link';

const SectionNav = () => (
  <div>
    <BudgetLink />
    <ReportsLink />
    <AllAccountsLink />
  </div>
);

export default SectionNav;
