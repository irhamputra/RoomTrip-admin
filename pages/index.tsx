import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import Form from '../components/Form';

import './style/index.css';

const Index: React.FunctionComponent = () => {
    return (
        <Layout>
            <h1 className='example'>Login form</h1>
            <Form />
        </Layout>
    );
};

export default connect()(Index);
