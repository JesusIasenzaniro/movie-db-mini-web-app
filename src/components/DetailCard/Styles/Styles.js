import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    root: {
        width: '90%',
        margin: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    typography: {
        margin: theme.spacing(1),
    },
    detail: {
        fontWeight: 'bold',
    },
}));