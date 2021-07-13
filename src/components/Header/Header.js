import React from 'react';
import { useStyle } from './Styles/Styles';
import logo from './assets/logo.png';
import InputField from './InputField';
import Navigation from './Navigation';

import { useMoviesContext } from '../../pages/Search/MoviesContext/MoviesContext';

const Header = () => {
    const { fetchData, setLoading, setData, setError } = useMoviesContext();
    const classes = useStyle();
    return (
        <main className={classes.root}>
            <article>
                <img className={classes.img} src={logo} alt='logo' />
            </article>
            <InputField fetchData={fetchData} setLoading={setLoading} setData={setData} setError={setError} />
            <Navigation />
        </main>
    );
};

export default Header;
