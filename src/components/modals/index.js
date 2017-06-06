import './index.css';

import React, { PropTypes } from 'react';

import AddAccountForm from '../../containers/add-account/form';

const Modals = ({ currentModal }) => {
  if (!currentModal) {
    return null;
  }

  return (
    <div className="modal">
      <div>
        {currentModal === 'add-account' && <AddAccountForm />}
      </div>
    </div>
  );
};

Modals.defaultProps = {
  currentModal: null
};

Modals.propTypes = {
  currentModal: PropTypes.string,
};

export default Modals;
