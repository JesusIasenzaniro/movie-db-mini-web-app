import React from 'react';
import Card from './Card';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

const List = ({ ratedMovies }) => {
    return (
        <Container maxWidth='md'>
            <Grid container justifyContent='space-around'>
                {ratedMovies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </Grid>
        </Container>
    );
};

export default List;
