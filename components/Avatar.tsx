import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/user';

const Avatar: React.FC = () => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const toggle = () => {
        setDropDownOpen(prevState => !prevState);
    };

    return (
        <div className='d-flex align-items-center justify-content-end'>
            {user.userID && <strong>Hi, {user.userID.displayName}</strong>}

            <img
                style={{ borderRadius: '100%' }}
                src={user.userID && user.userID.photoURL}
                alt='photo'
                width='4%'
                className='mx-3'
            />
            <Dropdown isOpen={dropDownOpen} toggle={() => toggle()}>
                <DropdownToggle caret />

                <DropdownMenu right>
                    <DropdownItem onClick={() => dispatch(logout())}>
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default Avatar;
