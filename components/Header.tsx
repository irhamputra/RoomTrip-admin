import React from 'react';
import {
    UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavbarToggler,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Buttons from './Buttons';

const Header = () => {
    const mobileSidebarToggle = (e) => {
        e.preventDefault();
        document.body.classList.toggle('sidebar-mobile-show');
    };
    return (
        <header id="app-header" className="app-header navbar">
            <NavbarToggler className="d-lg-none" id="mobileSidebarToggle" onClick={(e) => mobileSidebarToggle(e)}>
                <span className="navbar-toggler-icon" />
            </NavbarToggler>
            <ul className="pl-3 d-md-down-none navbar-nav">
                <UncontrolledDropdown className="px-3" nav inNavbar>
                    <DropdownToggle nav caret>Management</DropdownToggle>
                    <DropdownMenu className="mt-3">
                        <DropdownItem>Users</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </ul>
            <ul className="ml-auto navbar-nav">
                <UncontrolledDropdown className="nav-item" >
                    <DropdownToggle nav>
                        <span className="img-avatar">
                            <FontAwesomeIcon icon={faUserCircle} className="img-avatar"/>
                            {' '}
                            Hello admin
                        </span>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <Buttons />
                    </DropdownMenu>
                </UncontrolledDropdown>
            </ul>
        </header>
    );
};

export default Header;
