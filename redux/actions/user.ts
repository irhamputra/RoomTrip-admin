import * as Cookies from 'js-cookie';
import { db, FB, FireBase } from '../../config/firebase';
import { UserGoogleInfo } from '../../types/UserInfo';
import Router from 'next/router';

export const setValueForm = data => {
    return {
        type: 'UPDATE_FORM',
        payload: data
    };
};

export const getUserID = id => {
    return async (dispatch): Promise<any> => {
        const res = await db
            .collection('admin')
            .doc(id)
            .get();

        if (res.exists) {
            dispatch({ type: 'GET_USER', payload: res.data() });
        }
    };
};

export const signInWithGoogle = () => {
    return async dispatch => {
        try {
            let provider = new FireBase.auth.GoogleAuthProvider();
            const res = await FB.auth().signInWithPopup(provider);

            const {
                displayName,
                emailVerified,
                email,
                metadata: { lastSignInTime, creationTime },
                photoURL,
                phoneNumber,
                refreshToken,
                uid
            } = res.user;

            const newUser: UserGoogleInfo = {
                displayName,
                email,
                emailVerified,
                lastSignInTime,
                creationTime,
                phoneNumber,
                photoURL,
                uid,
                city: null
            };

            await db
                .collection('admin')
                .doc(uid)
                .set(newUser);

            const userCookies = {
                id: res.user.uid,
                token: refreshToken
            };

            Cookies.set('userCookies', JSON.stringify(userCookies), {
                expires: 7
            });

            dispatch({ type: 'GOOGLE_SIGN_IN', payload: res.user.uid });
        } catch (e) {
            console.error(e);
        }
    };
};

export const logout = () => {
    return (dispatch): Promise<void> => {
        return FB.auth()
            .signOut()
            .finally(async () => {
                dispatch({ type: 'LOGOUT' });
                Cookies.remove('userCookies');
                await Router.replace('/');
            });
    };
};
