export const getUserID = id => {
    return async dispatch => {
        // await response from firebase

        // user and dispatch return payload id
        dispatch({ type: 'GET_USER', payload: id });
    };
};

export const login = () => {
    return async (dispatch, getState) => {
        // get state email and password
        const { id, email, password } = getState().user;
        // check if email is not verified

        dispatch({ type: 'LOGIN', payload: getUserID(id) });
    };
};

export const register = () => {
    return async (dispatch, getState) => {
        // get all state from value in form

        // add to firebase

        // dispatch REGISTER and return payload current user
        dispatch({ type: 'REGISTER', payload: 'add this user' });
    };
};

export const logout = () => {
    return async dispatch => {
        // return firebase signOut()

        dispatch({ type: 'LOGOUT' });
    };
};
