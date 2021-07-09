import React from 'react';
import { useStyle } from './Styles/Styles';
import logo from './assets/logo.png';
import { Button, TextField } from '@material-ui/core';
const Header = () => {
    const classes = useStyle();
    return (
        <main className={classes.root}>
            <article>
                <img className={classes.img} src={logo} alt='logo' />
            </article>
            <form className={classes.form}>
                <article className={classes.inputContainer}>
                    <TextField className={classes.input} fullWidth placeholder='search...' />
                </article>
                <article>
                    <Button variant='contained' className={classes.btn}>
                        search
                    </Button>
                </article>
            </form>

            <section className={classes.btnContainer}>
                <article className={classes.btnBox}>
                    <Button variant='contained' className={classes.btn}>
                        Home
                    </Button>
                </article>
                <article className={classes.btnBox}>
                    <Button variant='contained' className={classes.btn}>
                        My List
                    </Button>
                </article>
            </section>
        </main>
    );
};

export default Header;
