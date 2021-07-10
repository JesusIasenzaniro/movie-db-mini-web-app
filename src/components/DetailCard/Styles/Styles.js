import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    root: {
        width: 345,
        margin: theme.spacing(2),
    },
    media: {
        height: 340,
    },
    link: {
        textDecoration: 'none',
    },
}));
