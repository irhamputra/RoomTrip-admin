import React from 'react';
import { connect } from 'react-redux';
import { NextPage, NextPageContext } from 'next';
import { Store } from 'redux';
import Form from '../components/Form';
import './style/index.css';

interface Context extends NextPageContext {
    store: Store;
}

const Index: NextPage = () => {
    return (
        <div>
            <h1 className='example'>Login form</h1>
            <Form />
        </div>
    );
};

Index.getInitialProps = async (ctx: Context) => {
    // ctx.store can access in SSR
    // see console in server
    console.log(ctx.store);
    return {};
};

export default connect(state => state)(Index);
