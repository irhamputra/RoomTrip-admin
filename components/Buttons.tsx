import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/user';

const Buttons: NextPage = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const dispatchLogout = async () => await dispatch(logout());

    let nameButton;
    let target;

    if (router.pathname === '/') {
        nameButton = 'Sign Up';
        target = '/register';
    } else if (router.pathname === '/register') {
        nameButton = 'Login';
        target = '/';
    } else if (router.pathname === '/dashboard') {
        nameButton = 'Logout';
        target = '/';
    }

    return (
        <button
            disabled={loading}
            onClick={async () => {
                setLoading(true);
                if (router.pathname === '/dashboard') {
                    dispatchLogout().then(() => {
                        router.push(target).then(() => setLoading(false));
                    });
                } else {
                    router.push(target).then(() => setLoading(false));
                }
            }}
        >
            {loading ? 'Loading...' : nameButton}
        </button>
    );
};

export default Buttons;
