import React from 'react';
import { connect } from 'react-redux';
import Examples from '../components/examples';

const Index = () => {
    return <Examples />;
};

export default connect()(Index);
