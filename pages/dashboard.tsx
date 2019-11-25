import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NextPage, NextPageContext } from 'next';
import { Dispatch, Store } from 'redux';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { parseCookies } from '../lib/parseCookies';
import { getUserID } from '../redux/actions/user';

interface Context extends NextPageContext {
    store?: Store;
}

interface Props {
    userCookies: string;
}

const Dashboard: NextPage<Props> = ({ userCookies }) => {
    const [loading, setLoading] = useState(false);
    const [cookies, _] = useState(() =>
        userCookies ? JSON.parse(userCookies) : ''
    );
    const user = useSelector((state: any) => state.user);
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        if (!cookies.token) {
            router.replace('/').then(() => {
                setLoading(false);
            });
        }
        setLoading(false);
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <h1>Dashboard</h1>
                    <h3>
                        Hello{' '}
                        {user.firstName ? user.firstName : user.displayName}
                    </h3>
                </div>
            )}
        </div>
    );
};

Dashboard.getInitialProps = async (ctx: Context) => {
    const cookies = parseCookies(ctx.req);
    const id = JSON.parse(cookies.userCookies).id;

    await ctx.store.dispatch<Dispatch | any>(getUserID(id));

    return {
        userCookies: cookies.userCookies
    };
};

export default connect(state => state)(Dashboard);
