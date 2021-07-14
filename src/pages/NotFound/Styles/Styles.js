import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    containerNotFound: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '30px',
    },
    titleBox: {
        margin: theme.spacing(4),
    },

    link: {
        textDecoration: 'none',
    },
}));
