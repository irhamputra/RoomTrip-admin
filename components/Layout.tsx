import React from 'react';

const Layout = props => {
    return (
        <div>
            <h1>RoomTrip Admin Panel</h1>
            {props.children}
        </div>
    );
};

export default Layout;
