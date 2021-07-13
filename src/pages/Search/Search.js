import React, { useEffect } from 'react';
import { useStyle } from '../Styles/Styles';
import { useMoviesContext } from './MoviesContext/MoviesContext';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Movies from '../../components/List/Movies';
import Title from '../../components/Title/Title';

const Search = () => {
    const { data, loading, error, fetchSessionId } = useMoviesContext();
    const classes = useStyle();

    // useEffect(() => {
    //     fetchSessionId();
    // }, []);

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }
    if (data.length === 0) {
        return <Title />;
    }

    return (
        <main className={classes.root}>
            <Movies data={data} />
        </main>
    );
};

export default Search;
