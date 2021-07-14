import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const StyledButton = withStyles({
    root: {
        textTransform: 'capitalize',
        backgroundColor: '#52006A',
        '&:hover': {
            backgroundColor: '#867AE9',
        },
        color: '#fff',
    },
})(Button);
