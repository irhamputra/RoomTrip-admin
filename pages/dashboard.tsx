import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NextPage, NextPageContext } from 'next';
import { Store } from 'redux';
import Buttons from '../components/Buttons';
import { parseCookies } from '../lib/parseCookies';
import { useRouter } from 'next/router';

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
                    <p>Hello dashboard</p>
                    <Buttons />
                </div>
            )}
        </div>
    );
};

Dashboard.getInitialProps = async (ctx: Context) => {
    const cookies = parseCookies(ctx.req);
    return {
        userCookies: cookies.userCookies
    };
};

export default connect(state => state)(Dashboard);
