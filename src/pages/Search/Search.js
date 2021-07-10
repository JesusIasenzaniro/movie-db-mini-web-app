import React from 'react';
import { useStyle } from '../Styles/Styles';
import { useMoviesContext } from './MoviesContext/MoviesContext';

const Search = () => {
    const { data } = useMoviesContext();
    const classes = useStyle();
    return <main className={classes.root}>Search</main>;
};

export default Search;
