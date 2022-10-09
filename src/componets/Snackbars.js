import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
 

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Snackbars(props) {

  let isLogedIn = useSelector((state) => state.isLoged.isLoged);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    props.setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={props.open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={isLogedIn ? "success" : "warning"} sx={{ width: '100%' }}>
           {isLogedIn ? `${props.foodName} added to Cart` : "You haven't Login yet !"}  
        </Alert>
      </Snackbar>
    </Stack>
  );
}
