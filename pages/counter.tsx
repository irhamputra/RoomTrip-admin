import React from 'react';
import { connect } from 'react-redux';
import Examples from '../components/examples';

const Counter: React.FC = () => {
    return (
        <div>
            <Examples />
        </div>
    );
};

export default connect()(Counter);
