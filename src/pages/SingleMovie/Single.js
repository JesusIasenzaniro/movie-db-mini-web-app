import React, { useEffect } from 'react';
import { useMoviesContext } from '../Search/MoviesContext/MoviesContext';
import { useParams } from 'react-router-dom';
import { useStyle } from './Styles/Styles';
import CardDetail from '../../components/DetailCard/Card';
import { movie_url as url, token } from '../../components/utils/constants';

const Single = () => {
    const { id } = useParams();
    const { fetchSingleData, singleData } = useMoviesContext();
    const classes = useStyle();
    const newUrl = `${url}${id}?api_key=${token}`;

    useEffect(() => {
        fetchSingleData(newUrl);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(singleData);
    return (
        <main className={classes.root}>
            <CardDetail singleData={singleData} />
        </main>
    );
};

export default Single;
