import { connect } from 'react-redux';

import Modals from '../../components/modals';

const mapStateProps = state => ({
  currentModal: state.modals.currentModal,
});

export default connect(mapStateProps)(Modals);
