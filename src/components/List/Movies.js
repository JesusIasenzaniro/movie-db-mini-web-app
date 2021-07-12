import React from 'react';
import Movie from './Movie';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
const Movies = ({ data }) => {
    return (
        <Container maxWidth='md'>
            <Grid container justifyContent='space-around'>
                {data.map((movie) => {
                    return <Movie movie={movie} key={movie.id} />;
                })}
            </Grid>
        </Container>
    );
};

export default Movies;
