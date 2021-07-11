import React, { useState } from 'react';
import { Card, CardContent, TextField, Button } from '@material-ui/core';
import { useStyle } from './Styles/Styles';
import { movie_url, token } from '../../components/utils/constants';
import axios from 'axios';

const Form = ({ id }) => {
    const classes = useStyle();
    const newUrl = `${movie_url}${id}/rating?api_key=${token}`;
    const [rate, setRate] = useState('');

    const handleChange = (e) => {
        setRate(([e.target.name] = e.target.value));
    };
    const postRate = async () => {
        try {
            let payload = Number(rate);
            console.log(payload);
            let res = await axios.post(newUrl, payload);
            let data = res.data;
            console.log(data);
        } catch (e) {
            console.log(e.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postRate();
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
