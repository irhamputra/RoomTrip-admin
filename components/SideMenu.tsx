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
        <div style={{ position: 'fixed' }} className='pt-3 text-white'>
            <div className="mb-4">
                <h1>
                    Room<span style={{ color: 'orange' }}>Trip</span>
                </h1>
            </div>


            {Links.map((link, i) => {
                return (
                    <p key={i}>
                        <Link href={link.path}>
                            <a className='text-white'>{link.label}</a>
                        </Link>
                    </p>
                );
            })}
        </div>
    );
};

export default SideMenu;
