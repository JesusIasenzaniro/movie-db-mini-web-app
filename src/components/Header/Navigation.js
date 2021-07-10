import React from 'react';
import { Button, Hidden } from '@material-ui/core';
import { useStyle } from './Styles/Styles';
import { DrawerHeader } from './DrawerHeader';

const Navigation = () => {
    const classes = useStyle();
    return (
        <main>
            <Hidden mdDown>
                <section className={classes.btnContainer}>
                    <article className={classes.btnBox}>
                        <Button color='primary' variant='contained' className={classes.btn}>
                            Home
                        </Button>
                    </article>
                    <article className={classes.btnBox}>
                        <Button variant='contained' className={classes.btn}>
                            My List
                        </Button>
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
