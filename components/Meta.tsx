import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Meta: React.FC = () => {
    const router = useRouter();

    let params;

    if (router.pathname === '/') {
        params = 'Login';
    } else if (router.pathname === '/dashboard') {
        params = 'Dashboard';
    } else if (router.pathname === '/register') {
        params = 'Register';
    }

    return (
        <Head>
            <title>RoomTrip | {params}</title>
            <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
            />
        </Head>
    );
};

export default Meta;
