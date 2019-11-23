export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'REGISTER':
            return { ...state, register: action.payload };
        default:
            return state;
    }
};
