import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { NextComponentType, NextPageContext } from 'next';
import withRedux from 'next-redux-wrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './style/style.scss';
import { initializeStore } from '../redux/store';

import Layout from '../components/Layout';
config.autoAddCss = false 

interface Props {
    Component: NextComponentType<NextPageContext, any>;
    store: Store;
}

class MyApp extends App<Props> {
    static async getInitialProps({ Component, ctx }) {
        // we can dispatch from here too
        // ctx.store.dispatch({type: 'FOO', payload: 'foo'});

        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        );
    }
}

export default withRedux(initializeStore)(MyApp);
