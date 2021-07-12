import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
export const StyledTextField = withStyles({
    root: {
        borderRadius: '5px',

        padding: '4px',
        backgroundColor: '#fff',
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

        '&:hover': {
            backgroundColor: '#867AE9',
        },
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
        width: '70px',
    },
    form: {
        display: 'flex',
        textAlign: 'center',
        width: '60%',
    },
    inputContainer: {
        width: '100%',
    },

    input: {
        // backgroundColor: '#fff',
        // padding: theme.spacing(1, 1, 0, 1),
    },
    inputBtn: {
        padding: theme.spacing(1),
    },
    btnContainer: {
        display: 'flex',
    },
    btnBox: {
        margin: theme.spacing(1, 1, 1, 1),
    },
    // btn: {
    //     backgroundColor: '#01b4e4',
    //     color: '#fff',

    //     '&:hover': {
    //         backgroundColor: '#90cea1',
    //     },
    // },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    link: {
        textDecoration: 'none',
    },
}));
