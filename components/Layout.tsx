import React from 'react';
import Meta from './Meta';

const Layout = props => {
    return (
        <div>
            <Meta />
            <h1>RoomTrip Admin Panel</h1>
            {props.children}
        </div>
    );
};

export default Layout;
