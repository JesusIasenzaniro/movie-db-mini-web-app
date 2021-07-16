import React, { useState, useContext } from 'react';
const MoviesContext = React.createContext();

export const MoviesProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState([]);
    const [detail, setDetail] = useState({
        name: '',
        rate: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [ratedMovies, setRatedMovies] = useState([]);

    const sessionId = 'da8909fad737cd61fbfdc63c9fcc8d11';
    // const [sessionId, setSessionId] = useState('');

    return (
        <MoviesContext.Provider value={{ data, setData, loading, setLoading, error, setError, singleData, setSingleData, sessionId, detail, setDetail, ratedMovies, setRatedMovies }}>
            {children}
        </MoviesContext.Provider>
    );
};

export const useMoviesContext = () => {
    return useContext(MoviesContext);
};
