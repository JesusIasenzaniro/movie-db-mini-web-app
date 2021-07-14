import React from 'react';
import { useStyle } from './Styles/Styles';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../components/GlobalComponents/StyledButton';
const Notfound = () => {
    const classes = useStyle();
    return (
        <main className={classes.containerNotFound}>
            <section className={classes.innerBox}>
                <article className={classes.titleBox}>
                    <h1 className={classes.title}>Page not found</h1>
                </article>

                <article>
                    <Link to='/' className={classes.link}>
                        <StyledButton variant='contained'>Return to home</StyledButton>
                    </Link>
                </article>
            </section>
        </main>
    );
};

export default Notfound;
