import React from 'react';
import { Card, CardMedia } from '@material-ui/core';
import { useStyle } from './Styles/Styles';
import { image_url, notImage } from '../../components/utils/constants';

const CardImage = ({ singleData }) => {
    const classes = useStyle();
    const url = `${image_url}${singleData.poster_path}`;

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={singleData.poster_path ? url : notImage} />
        </Card>
    );
};

export default CardImage;
