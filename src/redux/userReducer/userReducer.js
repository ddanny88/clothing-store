import { userTypes } from './userTypes';

const initialState = {
    curruentUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.SET_CURRENT_USER:
            return {
                ...state,
                curruentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;