import { UserActions, UserState } from '../../types/reducers/user';

export const user = (state: UserState = {}, action: UserActions): UserState => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'REGISTER':
            return action.payload;
        case 'GOOGLE_SIGN_IN':
            return { ...state, googleID: action.payload };
        case 'GET_USER':
            return { ...state, userID: action.payload };
        case 'UPDATE_FORM':
            return { ...state, login: action.payload };
        case 'LOGOUT':
            return (state = {});
        case 'ERROR_NO_ACCOUNT':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
