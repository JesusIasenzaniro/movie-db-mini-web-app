import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    root: {
        width: '80%',
        height: 'fit-content',
        margin: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        },
    },
    media: {
        height: 540,
    },
}));
