'use strict';

import React from 'react';

import SectionNav from '../navigation/section';
import BudgetAccountsNav from './budget-accounts-nav';
import OffBudgetAccountsNav from './off-budget-accounts-nav';
import ClosedAccountsNav from './closed-accounts-nav';
import ToggleSidebarButton from './toggle-sidebar-button';
import AddAccount from '../../containers/add-account';

const Sidebar = () => (
  <div>
    <SectionNav />
    <BudgetAccountsNav />
    <OffBudgetAccountsNav />
    <ClosedAccountsNav />
    <ToggleSidebarButton />
    <AddAccount />
  </div>
);

export default Sidebar;
