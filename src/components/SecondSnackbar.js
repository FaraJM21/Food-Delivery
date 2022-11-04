import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SecondSnackbar(props) {

    const {setIsOrdered, isOrdered, foodName }= props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOrdered(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={isOrdered} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
        {foodName} alredy ordered
        </Alert>
      </Snackbar>
    </Stack>
  );
}
