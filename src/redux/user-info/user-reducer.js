import userActionTypes from './user-action-types';


const initialState = {};

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case userActionTypes.SET_USER_INFO:
            return {
                ...action.payload
            }

        default:
            return state;
    }
}

export default userReducer;