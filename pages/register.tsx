import React from 'react';
import { connect } from 'react-redux';
import { NextPage, NextPageContext } from 'next';
import { Store } from 'redux';
import Form from '../components/Form';
import Buttons from '../components/Buttons';

interface Context extends NextPageContext {
    store: Store;
}

const Register: NextPage = () => {
    return (
        <div>
            <h1>Register form</h1>
            <Form register />
            <Buttons />
        </div>
    );
};

Register.getInitialProps = async (ctx: Context) => {
    return {};
};

export default connect(state => state)(Register);
