import userActionTypes from './user-action-types';

const setUserInfo = (data) => ({
    type: userActionTypes.SET_USER_INFO,
    payload: data,
})


export {
    setUserInfo
}