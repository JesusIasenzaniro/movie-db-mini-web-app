import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';

const MoviesContext = React.createContext();

export const MoviesProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const token = '8f781d70654b5a6f2fa69770d1d115a3';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${token}`;

    const fetchData = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${url}&query=${query}`);
            setData(response.data);
        } catch (e) {
            console.log(e);
            alert('Data not found');
        }
    };

    console.log(data);

    useEffect(() => {
        console.log('data updated');
    }, [data]);

    return <MoviesContext.Provider value={{ query, setQuery, data, fetchData, loading }}>{children}</MoviesContext.Provider>;
};

export const useMoviesContext = () => {
    return useContext(MoviesContext);
};
