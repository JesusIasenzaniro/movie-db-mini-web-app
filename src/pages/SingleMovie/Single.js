import React, { useEffect } from 'react';
import { useMoviesContext } from '../Search/MoviesContext/MoviesContext';
import { useParams } from 'react-router-dom';
import { useStyle } from './Styles/Styles';
import CardImage from '../../components/ImageCard/Card';
import { movie_url as url, token } from '../../components/utils/constants';
import DetailCard from '../../components/DetailCard/Card';
import { Grid, Container } from '@material-ui/core';
import Form from '../../components/OpinionForm/Form';

const Single = () => {
    const { fetchSingleData, singleData } = useMoviesContext();
    const { id } = useParams();
    const classes = useStyle();
    const newUrl = `${url}${id}?api_key=${token}`;

    useEffect(() => {
        fetchSingleData(newUrl);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <Container maxWidth='lg'>
            <Grid container className={classes.root}>
                <article className={classes.cardImage}>
                    <CardImage singleData={singleData} />
                </article>
                <article className={classes.cardDetail}>
                    <DetailCard singleData={singleData} />
                </article>
            </Grid>
            <Grid container justifyContent='center'>
                <Form id={id} />
            </Grid>
        </Container>
    );
};

export default Single;
