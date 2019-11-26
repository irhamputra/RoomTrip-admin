import * as Cookies from 'js-cookie';
import { db, FB, FireBase } from '../../config/firebase';
import { UserGoogleInfo, UserInfo } from '../../types/UserInfo';
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

            dispatch({ type: 'SIGN_IN_WITH_GOOGLE' });
        } catch (e) {
            console.error(e);
        }
    };
};

export const login = () => {
    return async (dispatch, getState): Promise<void> => {
        try {
            const {
                login: { email, password }
            } = getState().user;
            const res = await FB.auth().signInWithEmailAndPassword(
                email,
                password
            );
            const { uid } = res.user;
            const { isNewUser } = res.additionalUserInfo;

            if (!isNewUser) {
                await db
                    .collection('admin')
                    .doc(uid)
                    .update({
                        lastSignInTime: res.user.metadata.lastSignInTime
                    });

                const userCookies = {
                    id: res.user.uid,
                    token: res.user.refreshToken
                };

                Cookies.set('userCookies', JSON.stringify(userCookies), {
                    expires: 7
                });
                dispatch({ type: 'SIGN_IN' });
                await Router.push('/dashboard');
                return;
            }
        } catch (e) {
            dispatch({
                type: 'ERROR_NO_ACCOUNT',
                payload: e.message
            });
        }
    };
};

export const registerUser = () => {
    return async (dispatch, getState): Promise<void> => {
        try {
            const {
                login: { firstName, lastName, email, password, city }
            } = getState().user;
            const res = await FB.auth().createUserWithEmailAndPassword(
                email,
                password
            );
            const user = res.user;

            const newUser: UserInfo = {
                uid: res.user.uid,
                firstName,
                lastName,
                city,
                email,
                emailVerified: false,
                photoURL: null,
                phoneNumber: null,
                creationTime: res.user.metadata.creationTime,
                lastSignInTime: res.user.metadata.lastSignInTime
            };

            // CREATE USER TO DB
            await db
                .collection('admin')
                .doc(user.uid)
                .set(newUser);

            // READ USER FROM DB
            const getUser = await db
                .collection('admin')
                .doc(user.uid)
                .get();

            // send email verification
            if (!res.user.emailVerified) {
                res.user
                    .sendEmailVerification()
                    .then(async () => {
                        await db
                            .collection('admin')
                            .doc(res.user.uid)
                            .update({
                                emailVerified: true
                            });
                    })
                    .catch(err => console.error(err));
            }

            const userCookies = {
                id: res.user.uid,
                token: res.user.refreshToken
            };

            Cookies.set('userCookies', JSON.stringify(userCookies), {
                expires: 7
            });
            dispatch({ type: 'REGISTER', payload: getUser.data() });
            return;
        } catch (e) {
            dispatch({
                type: 'ERROR_NO_ACCOUNT',
                payload: e.message
            });
        }
    };
};

export const logout = () => {
    return (dispatch): Promise<void> => {
        return FB.auth()
            .signOut()
            .then(() => {
                dispatch({ type: 'LOGOUT' });
                Cookies.remove('userCookies');
            });
    };
};
