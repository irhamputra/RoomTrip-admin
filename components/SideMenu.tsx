import React from 'react';
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
        label: 'Bills',
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
    return (
        <div
            style={{ position: 'fixed' }}
            className='pt-3 text-white'
        >
            <h1>
                <strong>
                    Room<span className='text-orange'>Trip</span>
                </strong>
            </h1>

            {Links.map((link, i) => {
                return (
                    <h5 className='py-2' key={i}>
                        <Link href={link.path}>
                            <a className='text-white'>{link.label}</a>
                        </Link>
                    </h5>
                );
            })}
        </div>
    );
};

export default SideMenu;
