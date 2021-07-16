// import React, { useEffect } from 'react';
import { useStyle } from '../Styles/Styles';
import { useMoviesContext } from './MoviesContext/MoviesContext';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Movies from '../../components/List/Movies';
import Title from '../../components/Title/Title';

// import { session_url, api_key } from '../../components/utils/constants';
// import axios from 'axios';

const Search = () => {
    const { data, loading, error } = useMoviesContext();
    const classes = useStyle();

    //url to fetch the session id

    // const sessionUrl = `${session_url}${api_key}`;

    //to fetch the guest session id (is not automatic yet)

    // const fetchSessionId = async () => {
    //     try {
    //         const response = await axios.get(sessionUrl);
    //         console.log(response.data.guest_session_id);
    //         setSessionId(response.data.guest_session_id);
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // };

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
