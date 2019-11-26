import React from 'react';
import { useRouter } from 'next/router';
import Meta from './Meta';
import Header from './Header'

const Layout = props => {
    const router = useRouter();

    return (
        <div>
            <Meta />
            { router.pathname === '/' || router.pathname === '/register'
            ? '' : <Header /> 
            }
            {props.children}
        </div>
    );
};

export default Layout;
