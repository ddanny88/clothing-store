import { userTypes } from './userTypes';


// ACTION FUNCTIONS:
export function setCurrentUser(user) {
    return {
        type: userTypes.SET_CURRENT_USER,
        payload: user
    }
}
