import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { useStyle } from './Styles/Styles';
import Form from '../OpinionForm/Form';

const CardDetails = ({ id, singleData, postRate, rate, setRate, sessionId }) => {
    const classes = useStyle();

    return (
        <main className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                    {singleData.title}
                </Typography>
                <Typography className={classes.typography} variant='body2' color='textSecondary' component='p'>
                    <span className={classes.detail}>Original Title: </span> {singleData.original_title}
                </Typography>
                <Typography className={classes.typography} variant='body2' color='textSecondary' component='p'>
                    <span className={classes.detail}>Release date: </span> {singleData.release_date}
                </Typography>
                <Typography className={classes.typography} variant='body2' color='textSecondary' component='p'>
                    <span className={classes.detail}>Tagline: </span> {singleData.tagline}
                </Typography>

                {singleData.genres && (
                    <Typography className={classes.typography} variant='body2' color='textSecondary' component='p'>
                        <span className={classes.detail}> Genres: </span>
                        {singleData.genres.map((genre) => (
                            <span key={genre.id}> {genre.name},</span>
                        ))}
                    </Typography>
                )}
                <Typography className={classes.typography} variant='body2' color='textSecondary' component='p'>
                    <span className={classes.detail}> Vote average: </span>
                    {singleData.vote_average}
                </Typography>

                <Typography className={classes.typography} variant='body2' color='textSecondary' component='p'>
                    <span className={classes.detail}> Original language: </span>
                    {singleData.original_language}
                </Typography>
                <Typography className={classes.typography} variant='body2' color='textSecondary' component='p'>
                    <span className={classes.detail}> Overview: </span>
                    {singleData.overview}
                </Typography>
            </CardContent>
            <Form id={id} postRate={postRate} rate={rate} setRate={setRate} sessionId={sessionId} />
        </main>
    );
};

export default CardDetails;
