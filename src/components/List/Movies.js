import React from 'react';
import Movie from './Movie';
import { useStyle } from './Styles/Styles';

const Movies = ({ data }) => {
    const classes = useStyle();

    return (
        <main>
            {data.map((movie) => {
                return <Movie movie={movie} key={movie.id} />;
            })}
        </main>
    );
};

export default Movies;
