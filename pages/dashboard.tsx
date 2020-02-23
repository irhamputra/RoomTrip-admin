import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage, NextPageContext } from 'next';
import { Store } from 'redux';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getUserID } from '../redux/actions/user';
import { useCookie } from 'react-use';

interface Props {
    userCookies?: object;
}

const Dashboard: NextPage<Props> = () => {
    const [loading, setLoading] = useState(false);
    const [value] = useCookie('userCookies');

    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    const dispatchGetUserByID = async id => dispatch(getUserID(id));
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        if (value) {
            const { id } = JSON.parse(value);
            dispatchGetUserByID(id).finally(() => setLoading(false));
        } else {
            router.push('/').finally(() => setLoading(false));
        }
    }, []);

    if (loading) return <h1>Loading...</h1>;

    return (
        <div>
            <div>
                <h1>Dashboard</h1>
                {user.userID && <h2>Hello {user.userID.displayName}</h2>}
            </div>
        </div>
    );
};

export default Dashboard;
