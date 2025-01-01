import { Close, Send } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Grid2,
  IconButton,
  TextField,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
// import { login, register } from '../../actions/user';
import { useValue } from '../../context/ContextProvider';
// import GoogleOneTapLogin from './GoogleOneTapLogin';
import PasswordField from './PasswordField';

const Login = () => {
  const {
    state: { openLogin },
    dispatch,
  } = useValue();
  const [title, setTitle] = useState('Login');
  const [isRegister, setIsRegister] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleClose = () => {
    dispatch({ type: 'CLOSE_LOGIN' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // if (!isRegister) return login({ email, password }, dispatch);
    if (!isRegister) {
      dispatch({ type: 'START_LOADING' });
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch({ type: 'CLOSE_LOGIN' });
      dispatch({ type: 'END_LOADING' });
      return null;
    };
    const name = nameRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password !== confirmPassword)
      return dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          open: true,
          severity: 'error',
          message: 'Passwords do not match',
        },
      });
    // register({ name, email, password }, dispatch);
    dispatch({ type: 'START_LOADING' });
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch({ type: 'CLOSE_LOGIN' });
    dispatch({ type: 'END_LOADING' });
  };

  useEffect(() => {
    isRegister ? setTitle('Register') : setTitle('Login');
  }, [isRegister]);
  return (
    <Dialog open={openLogin} onClose={handleClose}>
      <DialogTitle>
        {title}
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit} autoComplete="off">
        <DialogContent dividers>
          <DialogContentText>
            Please fill your information in the fields below:
          </DialogContentText>
          <Grid container spacing={2}>
            {isRegister && (
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  autoComplete="off"
                  margin="normal"
                  variant="outlined"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                  inputRef={nameRef}
                  inputProps={{ minLength: 2 }}
                  required
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                autoComplete="off"
                margin="normal"
                variant="outlined"
                id="email"
                label="Email"
                type="email"
                fullWidth
                inputRef={emailRef}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordField {...{ passwordRef }} />
            </Grid>
            {isRegister && (
              <Grid item xs={12}>
                <PasswordField
                  passwordRef={confirmPasswordRef}
                  id="confirmPassword"
                  label="Confirm Password"
                />
              </Grid>
            )}
          </Grid>
        </DialogContent>
        <DialogActions sx={{ px: '19px' }}>
          <Button type="submit" variant="contained" fullWidth endIcon={<Send />}>
            Submit
          </Button>
        </DialogActions>
      </form>
      <DialogActions sx={{ justifyContent: 'left', p: '5px 24px' }}>
        {isRegister
          ? 'Do you have an account? Sign in now '
          : "Don't you have an account? Create one now "}
        <Button onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Login' : 'Register'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
