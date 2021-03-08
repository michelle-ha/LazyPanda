import * as UserApiUtil from '../util/user_api_util.js'

export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export const fetchUsers = () => (dispatch) => {
  return UserApiUtil.fetchUsers().then((users) => dispatch(receiveUsers(users)))
}