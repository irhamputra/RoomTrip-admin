import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { NextComponentType, NextPageContext } from 'next';
import withRedux from 'next-redux-wrapper';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
 * prodsedur ini ga akan jalan, remove package, lalu install package di link github
 * import 'font-awesome/css/font-awesome.min.css';
 * import 'simple-line-icons/css/simple-line-icons.css';
 */

// TODO: Check this https://github.com/FortAwesome/react-fontawesome#nextjs

import './style/style.scss';
import { initializeStore } from '../redux/store';

import Layout from '../components/Layout';

interface Props {
    Component: NextComponentType<NextPageContext, any>;
    store: Store;
}

class MyApp extends App<Props> {
    static async getInitialProps({ Component, ctx }) {
        console.log(ctx);

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
