import React, { useState, useContext } from 'react';
const MoviesContext = React.createContext();

export const MoviesProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState([]);
    const [rate, setRate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [ratedMovies, setRatedMovies] = useState([]);
    const sessionId = '24a18c1ebe3d4f4522a70909bb582d36';
    // const [sessionId, setSessionId] = useState('');

    return (
        <MoviesContext.Provider value={{ data, setData, loading, setLoading, error, setError, singleData, setSingleData, sessionId, rate, setRate, ratedMovies, setRatedMovies }}>
            {children}
        </MoviesContext.Provider>
    );
};

export const useMoviesContext = () => {
    return useContext(MoviesContext);
};
