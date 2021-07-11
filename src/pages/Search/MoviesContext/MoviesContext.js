import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { movies_url as url, token, session_url, movie_url } from '../../../components/utils/constants';

const MoviesContext = React.createContext();

export const MoviesProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState([]);
    const [rate, setRate] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [sessionId, setSessionId] = useState('');
    // const sessionId = '90f9691595a605088c62605151daef66';
    const newUrl = `${url}${token}`;
    const sessionUrl = `${session_url}${token}`;

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

    const fetchSessionId = async () => {
        try {
            const response = await axios.get(sessionUrl);
            console.log(response);
            setSessionId(response.data.guest_session_id);
        } catch (e) {
            console.log(e.message);
        }
    };
    useEffect(() => {
        fetchSessionId();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(sessionId);
    const postRate = async (url) => {
        try {
            let payload = Number(rate);
            console.log(payload);
            let res = await axios.post(url, payload);
            let data = res.data;
            console.log(data);
        } catch (e) {
            console.log(e.message);
        }
    };

    return <MoviesContext.Provider value={{ query, setQuery, data, fetchData, loading, error, fetchSingleData, singleData, postRate, rate, setRate, sessionId }}>{children}</MoviesContext.Provider>;
};

export const useMoviesContext = () => {
    return useContext(MoviesContext);
};

// https://api.themoviedb.org/3/authentication/guest_session/new?api_key=<<api_key>>
