import React from 'react';
import { useStyle } from './Styles/Styles';
import logo from './assets/logo.png';
const Footer = () => {
    const classes = useStyle();
    return (
        <main className={classes.root}>
            <img src={logo} alt='logo' className={classes.img} />
        </main>
    );
};

export default Footer;
