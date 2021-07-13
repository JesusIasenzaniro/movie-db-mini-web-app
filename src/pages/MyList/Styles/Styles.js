import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        margin: theme.spacing(5, 0, 5, 0),
    },
}));
