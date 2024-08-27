import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import wrapper from '../store/configureStore';

const NordBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>노드버드</title>
            </Head>
            <Component />
        </>
    );
};

NordBird.PropTypes = {
    Component : PropTypes.elementType.isRequired
}

export default wrapper.withRedux(NordBird);