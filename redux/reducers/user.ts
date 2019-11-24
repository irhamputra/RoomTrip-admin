import { UserActions, UserState } from '../../types/reducers/user';

export const user = (state: UserState, action: UserActions): UserState => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'REGISTER':
            return { ...state, register: action.payload };
        default:
            return state;
    }
};
