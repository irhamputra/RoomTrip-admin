import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { Store } from 'redux';
import Form from '../components/Form';
import Buttons from '../components/Buttons';
import { parseCookies } from '../lib/parseCookies';
import { signInWithGoogle } from '../redux/actions/user';

interface Context extends NextPageContext {
    store: Store;
}

const Index: NextPage<{ userCookies: string }> = ({ userCookies }) => {
    const [loading, setLoading] = useState(false);
    const [cookies, _] = useState(() =>
        userCookies ? JSON.parse(userCookies) : ''
    );
    const router = useRouter();

    const dispatch = useDispatch();
    const dispatchSignInWithGoogle = async () =>
        await dispatch(signInWithGoogle());

    useEffect(() => {
        setLoading(true);
        if (cookies.token) {
            router.replace('/dashboard').then(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    });

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <h1>Login form</h1>
                    <Form />
                    <Buttons />
                    <button
                        onClick={() => {
                            setLoading(true);
                            dispatchSignInWithGoogle().then(() => {
                                router.push('/dashboard')
                                    .then(() => setLoading(false)
                            )
                            });
                        }}
                    >
                        Sign in with Google
                    </button>
                </div>
            )}
        </div>
    );
};

Index.getInitialProps = async (ctx: Context) => {
    const cookies = parseCookies(ctx.req);
    return {
        userCookies: cookies.userCookies
    };
};

export default connect(state => state)(Index);
