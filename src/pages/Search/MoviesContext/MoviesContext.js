import axios from 'axios';
import React, { useState, useContext } from 'react';
import { movies_url as url, token } from '../../../components/utils/constants';

const MoviesContext = React.createContext();

export const MoviesProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState([]);
    // const [rate, setRate] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const newUrl = `${url}${token}`;

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

    return <MoviesContext.Provider value={{ query, setQuery, data, fetchData, loading, error, fetchSingleData, singleData }}>{children}</MoviesContext.Provider>;
};

export const useMoviesContext = () => {
    return useContext(MoviesContext);
};
