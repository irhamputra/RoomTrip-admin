import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import Form from '../components/Form';

const Index: React.FunctionComponent = () => {
    return (
        <Layout>
           <h1>Login form</h1>
            <Form/>
        </Layout>
    );
};

export default connect()(Index);
