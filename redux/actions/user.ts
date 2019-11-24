import { db, FB } from '../../config/firebase';

export const loginUser = data => {
    return {
        type: 'UPDATE_LOGIN',
        payload: data
    };
};

export const login = () => {
    return async (dispatch, getState): Promise<any> => {
        // get state email and password
        const {
            login: { email, password }
        } = getState().user;
        // check if email is not verified
        try {
            const res = await FB.auth().signInWithEmailAndPassword(
                email,
                password
            );
            const userID = res.user.uid;

            const user = await db
                .collection('users')
                .doc(userID)
                .get();

            if (user.exists){
                dispatch({ type: 'LOGIN', payload: user.data() });
            }
        } catch (e) {
            console.error(e);
        }
    };
};

export const registerUser = () => {
    return async (dispatch, getState): Promise<any> => {
        // get all state from value in form
        const {
            login: { email, password }
        } = getState().user;

        console.log('from action', email, password);
        // add to firebase

        // dispatch REGISTER and return payload current user
        dispatch({ type: 'REGISTER', payload: { email, password } });
    };
};

export const logout = () => {
    return async (dispatch): Promise<any> => {
        // return firebase signOut()

        dispatch({ type: 'LOGOUT' });
    };
};
