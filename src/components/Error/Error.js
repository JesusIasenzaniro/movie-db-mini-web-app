import React from 'react';
import { useStyle } from './Styles/Styles';

const Error = () => {
    const classes = useStyle();
    return (
        <main className={classes.root}>
            <h1>Error...</h1>
        </main>
    );
};

export default Error;
