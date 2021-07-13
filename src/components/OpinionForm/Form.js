import React from 'react';
import { Card, CardContent, TextField, Button, Typography } from '@material-ui/core';
import { useStyle } from './Styles/Styles';
import { movie_url, api_key } from '../../components/utils/constants';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import axios from 'axios';

const Form = ({ id, rate, setRate, sessionId }) => {
    const classes = useStyle();
    const newUrl = `${movie_url}${id}/rating?api_key=${api_key}&guest_session_id=${sessionId}`;

    const handleChange = (e) => {
        setRate(([e.target.name] = e.target.value));
    };

    const postRate = async () => {
        try {
            let payload = { value: Number(rate) };
            console.log(payload);
            let response = await axios.post(newUrl, payload);
            let data = response.data;
            setRate('');
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
                <article className={classes.titleContainer}>
                    {' '}
                    <Typography gutterBottom variant='h6'>
                        Rate this movie!
                    </Typography>
                </article>
                <ValidatorForm type='submit' onSubmit={handleSubmit}>
                    <ul className={classes.listContainer}>
                        <li className={classes.inputContainer}>
                            {' '}
                            <TextField id='standard-basic' label='Name' fullWidth name='name' />
                        </li>
                        <li className={classes.inputContainer}>
                            {' '}
                            <TextValidator
                                onChange={handleChange}
                                validators={['required', 'minNumber:0.5', 'maxNumber:10']}
                                errorMessages={['this field is required', ' the value be between 0.5 and 10']}
                                value={rate}
                                id='filled-number'
                                label='Rate'
                                type='text'
                                fullWidth
                                name='rate'
                            />
                        </li>
                        <li className={classes.inputContainer}>
                            <article className={classes.labelContainer}>
                                <label>Comment:</label>
                            </article>
                            <article>
                                <textarea className={classes.textarea} id='msg' name='comment'></textarea>
                            </article>
                        </li>
                    </ul>
                    <Button type='submit' variant='contained' color='primary' fullWidth>
                        Submit
                    </Button>
                </ValidatorForm>
            </CardContent>
        </Card>
    );
};

export default Form;
