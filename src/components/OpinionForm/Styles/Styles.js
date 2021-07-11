import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    root: {
        height: '400px',
        width: '400px',
        padding: theme.spacing(1),
    },
}));
