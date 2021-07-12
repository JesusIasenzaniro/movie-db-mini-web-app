import React, { useEffect } from 'react';
import { useStyle } from './Styles/Styles';
import List from '../../components/ListRatedMovies/List';
import { useMoviesContext } from '../Search/MoviesContext/MoviesContext';

const Mylist = () => {
    const { ratedMovies, fetchRatedMovies } = useMoviesContext();

    useEffect(() => {
        fetchRatedMovies();
    }, []);

    const classes = useStyle();
    return (
        <main className={classes.root}>
            <List ratedMovies={ratedMovies} />
        </main>
    );
};

export default Mylist;
