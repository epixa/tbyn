import React, { PropTypes } from 'react';

const Budget = ({ active }) => {
  if (!active) return null;
  return (
    <div id="budget">
      budget
    </div>
  );
};

Budget.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Budget;
