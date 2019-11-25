import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { Store } from 'redux';
import Form from '../components/Form';
import './style/index.css';
import Buttons from '../components/Buttons';
import { parseCookies } from '../lib/parseCookies';

interface Context extends NextPageContext {
    store: Store;
}

const Index: NextPage<{ userCookies: string }> = ({ userCookies }) => {
    const [loading, setLoading] = useState(false);
    const [cookies, _] = useState(() =>
        userCookies ? JSON.parse(userCookies) : ''
    );
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        if (cookies.token) {
            router.replace('/dashboard').then(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    });

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <h1 className='example'>Login form</h1>
                    <Form />
                    <Buttons />
                </div>
            )}
        </div>
    );
};

Index.getInitialProps = async (ctx: Context) => {
    const cookies = parseCookies(ctx.req);
    return {
        userCookies: cookies.userCookies
    };
};

export default connect(state => state)(Index);
