import React from 'react';
import { useStyle } from './Styles/Styles';
import { Button, TextField } from '@material-ui/core';

const InputField = () => {
    const classes = useStyle();
    return (
        <form className={classes.form}>
            <article className={classes.inputContainer}>
                <TextField className={classes.input} fullWidth placeholder='search...' />
            </article>
            <article>
                <Button color='primary' variant='contained' className={classes.inputBtn}>
                    search
                </Button>
            </article>
        </form>
    );
};

export default InputField;
