import React from 'react';
import { Button, Hidden } from '@material-ui/core';
import { useStyle, StyledButton } from './Styles/Styles';
import { DrawerHeader } from './DrawerHeader';
import { Link } from 'react-router-dom';
const Navigation = () => {
    const classes = useStyle();
    return (
        <main>
            <Hidden mdDown>
                <section className={classes.btnContainer}>
                    <article className={classes.btnBox}>
                        <Link to={'/'} className={classes.link}>
                            <StyledButton color='primary' variant='contained' className={classes.btn}>
                                Home
                            </StyledButton>
                        </Link>
                    </article>
                    <article className={classes.btnBox}>
                        <Link to={'/mylist'} className={classes.link}>
                            <StyledButton variant='contained' className={classes.btn}>
                                My List
                            </StyledButton>
                        </Link>
                    </article>
                </section>
            </Hidden>
            <Hidden lgUp>
                <DrawerHeader />
            </Hidden>
        </main>
    );
};

export default Navigation;
