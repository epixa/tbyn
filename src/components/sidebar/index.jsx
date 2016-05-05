'use strict';

import './../../styles/sidebar/sidebar.scss';

import React from 'react';
import classNames from 'classnames';

import SectionNav from '../navigation/section';
import BudgetAccountNav from '../../containers/navigation/budget-account';
import OffBudgetAccountNav from '../../containers/navigation/off-budget-account';
import ClosedAccountNav from '../../containers/navigation/closed-account';
import ToggleSidebar from '../../containers/sidebar/toggle';
import AddAccount from '../../containers/add-account';

const Sidebar = ({ collapsed }) => (
  <div className={classNames('sidebar', {collapsed: collapsed})}>
    <SectionNav />
    <BudgetAccountNav/>
    <OffBudgetAccountNav />
    <ClosedAccountNav />
    <div className="sidebar-bottom">
      <AddAccount />
      <ToggleSidebar />
    </div>
  </div>
);

export default Sidebar;
