import React from 'react';
import { useStyle } from './Styles/Styles';
import './Styles/Styles.css';
const Loading = () => {
    const classes = useStyle();
    return (
        <main className={classes.root}>
            <article className='lds-dual-ring'></article>
        </main>
    );
};

export default Loading;
