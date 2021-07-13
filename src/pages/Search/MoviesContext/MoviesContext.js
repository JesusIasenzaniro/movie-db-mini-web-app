import axios from 'axios';
import React, { useState, useContext } from 'react';
import { movies_url as url, api_key, session_url, rated_movies_url, movie_url, auth_url, ask_for_auth } from '../../../components/utils/constants';

const MoviesContext = React.createContext();

export const MoviesProvider = ({ children }) => {
    // const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState([]);
    const [rate, setRate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    // const [sessionId, setSessionId] = useState('');

    const [ratedMovies, setRatedMovies] = useState([]);
    const sessionId = '7248680a080e88878ace5a1ad9861042';

    const sessionUrl = `${session_url}${api_key}`;

    const postRate = async (url) => {
        try {
            let payload = { value: Number(rate) };
            console.log(payload);
            let res = await axios.post(url, payload);
            let data = res.data;
            console.log(data);
        } catch (e) {
            console.log(e.message);
        }
    };

    // const fetchSessionId = async () => {
    //     try {
    //         const response = await axios.get(sessionUrl);
    //         console.log(response.data.guest_session_id);
    //         setSessionId(response.data.guest_session_id);
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // };

    // useLocalStorage(sessionId, sessionId);

    // const fetchRatedMovies = async () => {
    //     try {
    //         const response = await axios.get(newRatedMoviesUrl);
    //         setRatedMovies(response.data.results);
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // };

    // console.log(ratedMovies);
    // https://api.themoviedb.org/3/guest_session/{guest_session_id}/rated/movies?api_key=

    return (
        <MoviesContext.Provider value={{ data, setData, loading, setLoading, error, setError, singleData, setSingleData, postRate, sessionId, rate, setRate, ratedMovies, setRatedMovies }}>
            {children}
        </MoviesContext.Provider>
    );
};

export const useMoviesContext = () => {
    return useContext(MoviesContext);
};
