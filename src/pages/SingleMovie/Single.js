import React, { useEffect } from 'react';
import { useMoviesContext } from '../Search/MoviesContext/MoviesContext';
import { useParams } from 'react-router-dom';
import { useStyle } from './Styles/Styles';
import CardImage from '../../components/ImageCard/Card';
import { movie_url as url, api_key } from '../../components/utils/constants';
import DetailCard from '../../components/DetailCard/Card';
import { Grid, Container } from '@material-ui/core';

const Single = () => {
    const { fetchSingleData, singleData, postRate, rate, setRate, sessionId } = useMoviesContext();
    const { id } = useParams();
    const classes = useStyle();
    const newUrl = `${url}${id}?api_key=${api_key}`;

    useEffect(() => {
        fetchSingleData(newUrl);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <Container maxWidth='lg' className={classes.container}>
            <Grid container className={classes.root}>
                <article className={classes.cardImage}>
                    <CardImage singleData={singleData} />
                </article>
                <article className={classes.cardDetail}>
                    <DetailCard id={id} singleData={singleData} postRate={postRate} rate={rate} setRate={setRate} sessionId={sessionId} />
                </article>
            </Grid>
            {/* <Grid container justifyContent='center'>
                <Form id={id} postRate={postRate} rate={rate} setRate={setRate} sessionId={sessionId} />
            </Grid> */}
        </Container>
    );
};

export default Single;
