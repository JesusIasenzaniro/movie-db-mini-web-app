import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import { useStyle } from './Styles/Styles';

const Movie = ({ movie }) => {
    const classes = useStyle();
    const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const notImage = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

    console.log(movie);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={movie.poster_path ? url : notImage} />

                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {movie.title}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        Release date: {movie.release_date ? movie.release_date : 'no information'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Movie;
