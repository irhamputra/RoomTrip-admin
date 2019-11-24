import React from 'react';
import '../pages/style/example.scss';

const Layout = props => {
    return (
        <div>
            <h1 className='test'>RoomTrip Admin Panel</h1>
            {props.children}
        </div>
    );
};

export default Layout;
