import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { movies_url as url, api_key, session_url, rated_movies_url, movie_url, auth_url, ask_for_auth } from '../../../components/utils/constants';

const MoviesContext = React.createContext();

export const MoviesProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState([]);
    const [rate, setRate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    // const [sessionId, setSessionId] = useState('');
    const [ratedMovies, setRatedMovies] = useState([]);
    const sessionId = '4f09d62883f8330991e2dbafbf5188a6';
    const newUrl = `${url}${api_key}`;
    const sessionUrl = `${session_url}${api_key}`;
    const newRatedMoviesUrl = `${rated_movies_url}${sessionId}/rated/movies?api_key=${api_key}`;

    // console.log(sessionId);

    const fetchData = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.get(`${newUrl}&query=${query}`);
            setData(response.data.results);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(true);
            console.log(e);
        }
    };

    const fetchSingleData = async (url) => {
        try {
            const response = await axios.get(url);

            setSingleData(response.data);
        } catch (e) {
            console.log(e.message);
        }
    };

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
    //         // console.log(response);
    //         setSessionId(response.data.guest_session_id);
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // };

    const fetchRatedMovies = async () => {
        try {
            const response = await axios.get(newRatedMoviesUrl);
            setRatedMovies(response.data.results);
        } catch (e) {
            console.log(e.message);
        }
    };

    console.log(ratedMovies);
    // https://api.themoviedb.org/3/guest_session/{guest_session_id}/rated/movies?api_key=

    return (
        <MoviesContext.Provider value={{ query, setQuery, data, fetchData, loading, error, fetchSingleData, singleData, sessionId, postRate, rate, setRate, ratedMovies, fetchRatedMovies }}>
            {children}
        </MoviesContext.Provider>
    );
};

export const useMoviesContext = () => {
    return useContext(MoviesContext);
};
