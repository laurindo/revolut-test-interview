import { connect } from 'react-redux';
import * as actionTypes from '../constants/ActionTypes';
import Modal from '../components/Modal';

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => {
      dispatch({ type: actionTypes.HIDE_MODAL })
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Modal);
