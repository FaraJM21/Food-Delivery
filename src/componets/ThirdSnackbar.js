import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ThirdSnackbar(props) {
  // const [open, setOpen] = React.useState(false);
   const {open,setOpen, isSuccess} = props

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={ isSuccess ?"success":"error"} sx={{ width: '100%' }}>
            { isSuccess? 'Card added Succesfully':'Client name have to be the same in creditcard !'}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
