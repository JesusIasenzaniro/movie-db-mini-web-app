import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
    },
    cardImage: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    cardDetail: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center',
        },
    },
}));
