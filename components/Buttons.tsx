import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { logout } from '../redux/actions/user';

const Buttons: NextPage = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const dispatchLogout = () => dispatch(logout());

    let nameButton;
    let target;
    let btnCol = 'primary';
    let btnCls = 'mt-3';

    if (router.pathname === '/') {
        nameButton = 'Register now!';
        target = '/register';
    } else if (router.pathname === '/register') {
        nameButton = 'Login';
        target = '/';
        btnCol = 'secondary';
        btnCls = 'btn-block';
    } else if (router.pathname === '/dashboard') {
        nameButton = 'Logout';
        target = '/';
        btnCol = 'white';
        btnCls = 'mr-4';
    }

    return (
        <Button
            color={btnCol}
            className={btnCls}
            active
            disabled={loading}
            onClick={() => {
                if (router.pathname === '/dashboard') {
                    setLoading(true);
                    dispatchLogout();
                } else {
                    router.push(target);
                }
            }}
        >
            {loading ? 'Loading...' : nameButton}
        </Button>
    );
};

export default Buttons;
