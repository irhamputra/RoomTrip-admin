import React from 'react';
import {
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavbarToggler
} from 'reactstrap';
import Buttons from './Buttons';

const Header = () => {
    const mobileSidebarToggle = e => {
        e.preventDefault();
        /*
        * https://reactjs.org/docs/refs-and-the-dom.html
        * target DOM di React pakai Refs untuk akses DOM
        *
        * React ada Hooks untuk Refs, useRefs()
        * https://reactjs.org/docs/hooks-reference.html#useref
        */
        document.body.classList.toggle('sidebar-mobile-show');
    };
    return (
        <header id='app-header' className='app-header navbar'>
            <NavbarToggler
                className='d-lg-none'
                id='mobileSidebarToggle'
                onClick={e => mobileSidebarToggle(e)}
            >
                <span className='navbar-toggler-icon' />
            </NavbarToggler>
            <ul className='pl-3 d-md-down-none navbar-nav'>
                <UncontrolledDropdown className='px-3' nav inNavbar>
                    <DropdownToggle nav caret>
                        Management
                    </DropdownToggle>
                    <DropdownMenu className='mt-3'>
                        <DropdownItem>Users</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </ul>
            <ul className='ml-auto navbar-nav'>
                <span className='user-welcome'>Hello admin</span>
                <UncontrolledDropdown className='nav-item'>
                    <DropdownToggle nav caret>
                        <span className='img-avatar'>
                            <i className='icon-user img-avatar' />
                        </span>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <Buttons />
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </ul>
        </header>
    );
};

export default Header;
