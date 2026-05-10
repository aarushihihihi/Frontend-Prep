

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Buttons(){

    return(
        <>

<Button variant="outlined"
color="success"
startIcon={<DeleteIcon/>}
size="small"
>Submit</Button>
        </>
    )
}