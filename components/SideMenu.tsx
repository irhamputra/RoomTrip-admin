import React from 'react';
import { Button } from 'reactstrap';
import { logout } from '../redux/actions/user';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const Links = [
    {
        label: 'Dashboard',
        path: '/dashboard'
    },
    {
        label: 'Rooms',
        path: '/rooms'
    },
    {
        label: 'Biils',
        path: '/bills'
    },
    {
        label: 'Users',
        path: '/users'
    },
    {
        label: 'Settings',
        path: '/settings'
    }
];

const SideMenu: React.FC = () => {
    const dispatch = useDispatch();

    const onLogOut = () => {
        console.log('logout');
        dispatch(logout());
    };

    return (
        <div>
            <h1>RoomTrip</h1>

            {Links.map((link,i) => {
                return (
                    <div key={i}>
                        <Link href={link.path}>
                            <a>{link.label}</a>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default SideMenu;
