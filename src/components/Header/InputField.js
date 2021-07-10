import React from 'react';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './Styles/Styles.css';
import { useStyle } from './Styles/Styles';
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
                <Button type='submit' variant='contained' className='inputBtn'>
                    search
                </Button>
            </article>
        </form>
    );
};

export default InputField;
