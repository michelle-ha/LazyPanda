import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import {receiveErrors} from "../../actions/session_actions"

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <a onClick={() => {
        dispatch(openModal('login'))
        dispatch(receiveErrors([]))
      }
        }>
        Login
      </a>
    ),
    closeModal: () => {
      dispatch(closeModal())
      dispatch(receiveErrors([]))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
