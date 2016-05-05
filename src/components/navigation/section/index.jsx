'use strict';

import '../../../styles/navigation/section/section.scss';

import React from 'react';

import BudgetLink from '../../../containers/navigation/section/budget-link';
import ReportsLink from '../../../containers/navigation/section/reports-link';
import AllAccountsLink from '../../../containers/navigation/section/all-accounts-link';

const SectionNav = () => (
  <div className="section-nav">
    <BudgetLink>
      Budget
    </BudgetLink>

    <ReportsLink>
      Reports
    </ReportsLink>

    <AllAccountsLink/>
  </div>
);

export default SectionNav;
