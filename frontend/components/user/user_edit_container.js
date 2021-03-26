import { connect } from 'react-redux';

import UserEditForm from './user_edit_form';
import { updateUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],

    }
}

const mDTP = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user))
    }
}

export default connect(mSTP, mDTP)(UserEditForm);