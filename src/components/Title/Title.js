import React from 'react';
import { useStyle } from './Styles/Styles';
const Title = () => {
    const classes = useStyle();
    return (
        <main className={classes.root}>
            <h1>Search for a movie...</h1>
        </main>
    );
};

export default Title;
