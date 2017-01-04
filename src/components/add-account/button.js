import React, { PropTypes } from 'react';

const AddAccountButton = ({ onClick, truncated }) => (
  <button onClick={onClick} className="sidebar-addaccount-btn">
    {truncated ? 'Add' : 'Add Account'}
  </button>
);

AddAccountButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  truncated: PropTypes.bool.isRequired,
};

export default AddAccountButton;
