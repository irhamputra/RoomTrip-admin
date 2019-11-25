import React from 'react';
import Meta from './Meta';

const Layout = props => {
    return (
        <div>
            <Meta />
            {props.children}
        </div>
    );
};

export default Layout;
