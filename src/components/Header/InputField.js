import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyle, InputButton, StyledTextField } from './Styles/Styles';
import { useHistory } from 'react-router-dom';
import { movies_url as url, api_key } from '../utils/constants';
import axios from 'axios';

const InputField = ({ setLoading, setData, setError }) => {
    const [query, setQuery] = useState('');
    const classes = useStyle();
    const history = useHistory();
    const newUrl = `${url}${api_key}`;

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const fetchData = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.get(`${newUrl}&query=${query}`);
            setData(response.data.results);
            history.push('/');
            setQuery('');
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(true);
            console.log(e);
        }
    };

    return (
        <form onSubmit={(e) => fetchData(e)} className={classes.form}>
            <article className={classes.inputContainer}>
                <StyledTextField value={query} onChange={handleChange} className={classes.input} fullWidth placeholder='search...' />
            </article>
            <article>
                <InputButton type='submit' className={classes.inputBtn}>
                    search
                </InputButton>
            </article>
        </form>
    );
};

export default InputField;
