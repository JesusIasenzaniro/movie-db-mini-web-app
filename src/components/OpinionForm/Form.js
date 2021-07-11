import React from 'react';
import { Card, CardContent, TextField, Button } from '@material-ui/core';
import { useStyle } from './Styles/Styles';
import { movie_url, token } from '../../components/utils/constants';

const Form = ({ id, postRate, rate, setRate, sessionId }) => {
    const classes = useStyle();
    const newUrl = `${movie_url}${id}/rating?api_key=${token}&guest_session_id=${sessionId}}`;

    console.log(sessionId);
    const handleChange = (e) => {
        setRate(([e.target.name] = e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postRate(newUrl);
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <form type='submit' onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            {' '}
                            <TextField id='standard-basic' label='Name' fullWidth />
                        </li>
                        <li>
                            {' '}
                            <TextField onChange={handleChange} value={rate} id='filled-number' label='Rate' type='number' fullWidth />
                        </li>
                        <li>
                            {' '}
                            <label>Comment:</label>
                            <div>
                                <textarea id='msg' name='comment'></textarea>
                            </div>
                        </li>
                    </ul>
                    <Button type='submit' variant='contained' color='primary'>
                        Submit
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default Form;
