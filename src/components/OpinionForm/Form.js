import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { useStyle } from './Styles/Styles';
import { movie_url, api_key } from '../../components/utils/constants';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { StyledButton } from '../GlobalComponents/StyledButton';
const Form = ({ id, sessionId, detail, setDetail }) => {
    const classes = useStyle();
    const newUrl = `${movie_url}${id}/rating?api_key=${api_key}&guest_session_id=${sessionId}`;
    const history = useHistory();

    const handleChange = (e) => {
        setDetail({
            ...detail,
            [e.target.name]: e.target.value,
        });
    };

    const postRate = async () => {
        try {
            let payload = { value: Number(detail.rate) };
            let response = await axios.post(newUrl, payload);
            let data = response.data;
            alert('rate made successfully!');
            setDetail({
                name: '',
                rate: '',
            });
            history.push('/mylist');
            console.log(data);
        } catch (e) {
            console.log(e.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postRate();
    };

    ValidatorForm.addValidationRule('isBetween0.5&10', () => {
        if ((detail.rate > 0.4 && detail.rate < 11) || detail.rate === '') {
            return true;
        }
        return false;
    });
    ValidatorForm.addValidationRule('isNotEmpty', () => {
        if (detail.name) {
            return true;
        }
        return false;
    });

    return (
        <Card className={classes.root}>
            <CardContent>
                <article className={classes.titleContainer}>
                    {' '}
                    <Typography className={classes.rateTitle} gutterBottom variant='h6'>
                        Rate this movie!
                    </Typography>
                </article>

                <ValidatorForm type='submit' onSubmit={handleSubmit}>
                    <ul className={classes.listContainer}>
                        <li className={classes.inputContainer}>
                            <TextValidator
                                onChange={handleChange}
                                fullWidth
                                validators={['isNotEmpty']}
                                errorMessages={['this field is required']}
                                id='standard-basic'
                                label='Name'
                                name='name'
                                value={detail.name}
                            />
                        </li>
                        <li className={classes.inputContainer}>
                            {' '}
                            <TextValidator
                                onChange={handleChange}
                                validators={['required', 'isBetween0.5&10']}
                                errorMessages={['this field is required', ' the value must be between 0.5 and 10']}
                                value={detail.rate}
                                id='filled-number'
                                label='Rate'
                                type='number'
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

                    <StyledButton type='submit' variant='contained' fullWidth>
                        Submit
                    </StyledButton>
                </ValidatorForm>
            </CardContent>
        </Card>
    );
};

export default Form;
