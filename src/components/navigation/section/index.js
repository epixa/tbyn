import React from 'react';

import BudgetLink from '../../../containers/navigation/section/budget-link';
import ReportsLink from '../../../containers/navigation/section/reports-link';
import AllAccountsLink from '../../../containers/navigation/section/all-accounts-link';

const SectionNav = () => (
  <nav className="sidebar-nav">
    <BudgetLink>
      Budget
    </BudgetLink>

    <ReportsLink>
      Reports
    </ReportsLink>

    <AllAccountsLink />
  </nav>
);

export default SectionNav;
