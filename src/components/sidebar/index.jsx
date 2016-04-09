'use strict';

import React from 'react';

import SectionNav from '../navigation/section';
import BudgetAccountNav from '../../containers/navigation/budget-account';
import OffBudgetAccountNav from '../../containers/navigation/off-budget-account';
import ClosedAccountNav from '../../containers/navigation/closed-account';
import ToggleSidebar from '../../containers/sidebar/toggle';
import AddAccount from '../../containers/add-account';

const Sidebar = () => (
  <div>
    <SectionNav />
    <BudgetAccountNav/>
    <OffBudgetAccountNav />
    <ClosedAccountNav />
    <ToggleSidebar />
    <AddAccount />
  </div>
);

export default Sidebar;
