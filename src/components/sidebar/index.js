import './index.css';

import React, { PropTypes } from 'react';

import SectionNav from '../navigation/section';
import BudgetAccountNav from '../../containers/navigation/budget-account';
import OffBudgetAccountNav from '../../containers/navigation/off-budget-account';
import ClosedAccountNav from '../../containers/navigation/closed-account';
import ToggleSidebar from '../../containers/sidebar/toggle';
import AddAccount from '../../containers/add-account';

const Sidebar = ({ collapsed }) => {
  const classes = ['sidebar'];
  if (collapsed) {
    classes.push('sidebar-collapsed');
  }
  return (
    <div className={classes.join(' ')}>
      <SectionNav />
      <BudgetAccountNav />
      <OffBudgetAccountNav />
      <ClosedAccountNav />
      <ToggleSidebar />
      <AddAccount />
    </div>
  );
};

Sidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default Sidebar;
