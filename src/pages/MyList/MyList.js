import React, { useEffect } from 'react';
import { useStyle } from './Styles/Styles';
import List from '../../components/ListRatedMovies/List';
import { useMoviesContext } from '../Search/MoviesContext/MoviesContext';
import axios from 'axios';
import { rated_movies_url, api_key } from '../../components/utils/constants';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Mylist = () => {
    const { ratedMovies, setRatedMovies, sessionId, loading, error, setLoading, setError } = useMoviesContext();
    const classes = useStyle();
    const newRatedMoviesUrl = `${rated_movies_url}${sessionId}/rated/movies?api_key=${api_key}`;

    const fetchRatedMovies = async () => {
        try {
            setLoading(true);
            const response = await axios.get(newRatedMoviesUrl);
            setRatedMovies(response.data.results);
            setLoading(false);
        } catch (e) {
            setError(true);
            console.log(e.message);
        }
    };

    useEffect(() => {
        fetchRatedMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }

    return (
        <main className={classes.root}>
            <List ratedMovies={ratedMovies} />
        </main>
    );
};

export default Mylist;
