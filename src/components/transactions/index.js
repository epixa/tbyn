import React, { PropTypes } from 'react';

const Transactions = ({ active }) => {
  if (!active) return null;
  return (
    <div id="transactions">
      transactions
    </div>
  );
};

Transactions.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Transactions;
