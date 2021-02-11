import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions"
import SessionForm from './session_form';
import {receiveErrors} from "../../actions/session_actions"



const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <a onClick={() => {
        dispatch(openModal('signup'))
        dispatch(receiveErrors([]))
      }
        }>
        Sign Up
      </a>
    ),
    closeModal: () => {
      dispatch(closeModal())
      dispatch(receiveErrors([]))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
