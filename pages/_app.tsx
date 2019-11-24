import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { NextComponentType, NextPageContext } from 'next';
import withRedux from 'next-redux-wrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeStore } from '../redux/store';

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
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default withRedux(initializeStore)(MyApp);
