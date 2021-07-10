import React from 'react';
import { useStyle } from './Styles/Styles';
import logo from './assets/logo.png';
import InputField from './InputField';
import Navigation from './Navigation';
const Header = () => {
    const classes = useStyle();
    return (
        <main className={classes.root}>
            <article>
                <img className={classes.img} src={logo} alt='logo' />
            </article>
            <InputField />
            <Navigation />
        </main>
    );
};

export default Header;
