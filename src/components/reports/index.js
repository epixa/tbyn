import React, { PropTypes } from 'react';

const Reports = ({ active }) => {
  if (!active) return null;
  return (
    <div id="reports">
      reports
    </div>
  );
};

Reports.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Reports;
