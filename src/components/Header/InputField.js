import React from 'react';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyle, InputButton, StyledTextField } from './Styles/Styles';
const InputField = ({ query, setQuery, fetchData }) => {
    const classes = useStyle();

    const handleChange = (e) => {
        setQuery(e.target.value);
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
