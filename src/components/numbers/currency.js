import React, { PropTypes } from 'react';

import { formatCurrency, formatCurrencyWithDollarSign } from '../../../lib/numbers/currency';

const Currency = ({ amount, withDollarSign }) => {
  const format = withDollarSign ? formatCurrencyWithDollarSign : formatCurrency;
  return (
    <span className={amount < 0 ? 'currency-negative' : 'currency'}>
      {format(amount)}
    </span>
  );
};

Currency.defaultProps = {
  withDollarSign: false
};

Currency.propTypes = {
  amount: PropTypes.number.isRequired,
  withDollarSign: PropTypes.bool
};

export default Currency;
