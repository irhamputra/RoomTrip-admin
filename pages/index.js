import React from 'react';
import { connect } from 'react-redux';
import Examples from '../components/examples';
import Layout from '../components/Layout';

const Index = () => {
    return (
        <Layout>
            <Examples />
        </Layout>
    );
};

export default connect()(Index);
