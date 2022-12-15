import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface Props {
    children: JSX.Element,
    click: Function
}
const Buttons: React.FC<Props> = ({ children, click }): JSX.Element => {
    return (
        <Stack direction="row" spacing={1} >
            <div className="" onClick={() => click()}>
                <IconButton aria-label="delete">
                    {children}
                </IconButton>
            </div>
        </Stack>

    );
}



export default Buttons