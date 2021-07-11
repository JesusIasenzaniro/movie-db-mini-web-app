import { makeStyles } from '@material-ui/core/styles';

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
        backgroundColor: '#fff',
        padding: theme.spacing(1, 1, 0, 1),
    },
    inputBtn: {
        padding: theme.spacing(1),
        backgroundColor: '#01b4e4',
    },
    btnContainer: {
        display: 'flex',
    },
    btnBox: {
        margin: theme.spacing(1, 1, 1, 1),
    },
    btn: {
        backgroundColor: '#01b4e4',
        color: '#fff',

        '&:hover': {
            backgroundColor: '#90cea1',
        },
    },
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
