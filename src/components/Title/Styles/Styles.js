import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
