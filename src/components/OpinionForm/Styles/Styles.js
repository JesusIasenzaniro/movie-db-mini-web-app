import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    root: {
        height: 'fit-content',
        width: '100%',
    },
    titleContainer: {
        textAlign: 'center',
    },
    rateTitle: {
        color: '#52006A',
        fontWeight: 'bold',
    },

    listContainer: {
        margin: '0',
        padding: theme.spacing(1),
    },
    inputContainer: {
        listStyle: 'none',
        margin: theme.spacing(0, 0, 2, 0),
    },

    labelContainer: {
        margin: theme.spacing(0, 0, 2, 0),
    },
    textarea: {
        width: '100%',
        height: '50px',
    },
}));
