import React from 'react';
import { useStyle } from './Styles/Styles';
import { Button, TextField } from '@material-ui/core';

const InputField = ({ query, setQuery, fetchData }) => {
    const classes = useStyle();

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <form onSubmit={(e) => fetchData(e)} className={classes.form}>
            <article className={classes.inputContainer}>
                <TextField value={query} onChange={handleChange} className={classes.input} fullWidth placeholder='search...' />
            </article>
            <article>
                <Button type='submit' color='primary' variant='contained' className={classes.inputBtn}>
                    search
                </Button>
            </article>
        </form>
    );
};

export default InputField;
