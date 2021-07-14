import React from 'react';
import { useStyle } from './Styles/Styles';
import { useMoviesContext } from '../../pages/Search/MoviesContext/MoviesContext';

const Title = () => {
    const { data } = useMoviesContext();
    const classes = useStyle();
    return <main className={classes.root}>{data === [] ? <h1>Movie not found</h1> : <h1>Search for a movie...</h1>}</main>;
};

export default Title;
