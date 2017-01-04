import React, { PropTypes } from 'react';

const ToggleSidebar = ({ collapsed, onClick }) => (
  <a onClick={onClick} className="sidebar-toggle-btn">
    {collapsed ? '◀▶' : '◀▶'}
  </a>
);

ToggleSidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToggleSidebar;
