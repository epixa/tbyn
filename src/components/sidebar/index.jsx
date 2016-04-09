'use strict';

import React from 'react';

import SectionNav from './section-nav';
import BudgetAccountsNav from './budget-accounts-nav';
import OffBudgetAccountsNav from './off-budget-accounts-nav';
import ClosedAccountsNav from './closed-accounts-nav';
import AddAccountButton from './add-account-button';
import AddAccountForm from '../add-account';
import ToggleSidebarButton from './toggle-sidebar-button';

const Sidebar = () => (
  <div>
    <SectionNav />
    <BudgetAccountsNav />
    <OffBudgetAccountsNav />
    <ClosedAccountsNav />
    <AddAccountButton />
    <AddAccountForm />
    <ToggleSidebarButton />
  </div>
);

export default Sidebar;
