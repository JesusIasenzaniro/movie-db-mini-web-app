import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import { useStyle } from './Styles/Styles';
import { Link } from 'react-router-dom';
import { image_url, notImage } from '../utils/constants';

const Movie = ({ movie }) => {
    const classes = useStyle();
    const url = `${image_url}${movie.poster_path}`;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Link to={`search/${movie.id}`} className={classes.link}>
                    <CardMedia className={classes.media} image={movie.poster_path ? url : notImage} />
                </Link>
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
