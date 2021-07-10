import React from 'react';
import { useStyle } from './Styles/Styles';

const Loading = () => {
    const classes = useStyle();
    return (
        <main className={classes.root}>
            <h2>Loading...</h2>
        </main>
    );
};

export default Loading;
