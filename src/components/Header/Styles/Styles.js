import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

export const StyledTextField = withStyles({
    root: {
        borderRadius: '5px',
        padding: '4px',
        backgroundColor: '#fff',
        '& .MuiInput-underline:after ': {
            border: 0,
        },
        '& .MuiInput-underline:before': {
            border: 0,
        },
        '& .MuiInput-underline:hover:(.Mui-disabled):before': {
            border: 0,
        },
    },
})(TextField);

export const StyledButton = withStyles({
    root: {
        backgroundColor: '#01b4e4',
        color: '#fff',

        '&:hover': {
            backgroundColor: '#90cea1',
        },
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export const InputButton = withStyles({
    root: {
        backgroundColor: '#52006A',
        color: '#fff',
        borderRadius: '0 3px 3px 0',

        '&:hover': {
            backgroundColor: '#867AE9',
        },
        height: '40px',
        width: '10px',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',

        backgroundColor: '#000',
        padding: theme.spacing(1),
    },
    img: {
        width: '53px',
        paddingRight: theme.spacing(2),
    },
    form: {
        display: 'flex',
        textAlign: 'center',
        width: '60%',
    },
    inputContainer: {
        width: '100%',
    },

    inputBtn: {
        padding: theme.spacing(1),
    },
    btnContainer: {
        display: 'flex',
    },
    link: {
        textDecoration: 'none',
    },

    btnBox: {
        margin: theme.spacing(1, 1, 1, 1),
    },

    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));
