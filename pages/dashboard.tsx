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
    userCookies?: object;
}

const Dashboard: NextPage<Props> = ({ userCookies }) => {
    const [loading, setLoading] = useState(false);

    const user = useSelector((state: any) => state.user);
    const router = useRouter();

    useEffect(() => {
        setLoading(true);

        console.log(userCookies);

        if (!userCookies) {
            router.replace('/').finally(() => {
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
    if (!cookies) return {};

    const { id, token } = JSON.parse(cookies.userCookies);
    await ctx.store.dispatch<Dispatch | any>(getUserID(id));

    return {
        userCookies: { id, token }
    };
};

export default connect(state => state)(Dashboard);
