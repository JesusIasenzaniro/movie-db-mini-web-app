import React from 'react';
import { useStyle } from './Styles/Styles';
import logo from './assets/logo.png';
import InputField from './InputField';
import Navigation from './Navigation';
import { useMoviesContext } from '../../pages/Search/MoviesContext/MoviesContext';

const Header = () => {
    const { query, setQuery, data, fetchData } = useMoviesContext();
    const classes = useStyle();
    return (
        <main className={classes.root}>
            <article>
                <img className={classes.img} src={logo} alt='logo' />
            </article>
            <InputField query={query} setQuery={setQuery} fetchData={fetchData} />
            <Navigation />
        </main>
    );
};

export default Header;
