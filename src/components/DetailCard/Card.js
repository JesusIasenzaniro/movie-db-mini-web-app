import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import { useStyle } from './Styles/Styles';
import { Link } from 'react-router-dom';

const CardDetails = ({ singleData }) => {
    const classes = useStyle();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image='hello' />

                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'></Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        Release date:
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardDetails;
