import React, { useState, useEffect } from "react";
//import Alert
import Alert from '@mui/material/Alert';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';


const theme = createTheme();

const sendPayload = (username, email, password, confirmPassword) => {
    if (password === confirmPassword) {
        const payload = {
            username: username,
            email: email,
            password: password};

        axios.post('http://127.0.0.1:8000/vendor/auth/register/', payload)
        .then(res => {
            const token = res.data.token;
            localStorage.setItem('token', token);
            console.log(res.data)
            
            }
        )
    }

    else {
        console.log("Passwords do not match");
    }
}

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const  [error, setError] = useState(false);

    const validatePassword = (password, confirmPassword) => {
        if (password === confirmPassword) {
            setError(true);
        }
        else {
            setError(false);
        }
    }

    useEffect (() => {
        setTimeout(() => {
            validatePassword(password, confirmPassword);
        }, 1000);
    }, [password, confirmPassword]);
    
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/*<LockOutlinedIcon />*/}
            </Avatar>
            <Typography component="h1" variant="h5">
              Register for Dryce
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            {error ?
            <Alert severity="error">Your passwords do not match!</Alert> :
            <div></div>
            }
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="Username"
                autoComplete="username"
    
                onChange={(username) => {setUsername(username.target.value); }}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(email) => setEmail(email.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(password) => setPassword(password.target.value)}
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                onChange={(confirmPassword) => setConfirmPassword(confirmPassword.target.value)}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Accept terms and conditions"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {sendPayload(username, email, password, confirmPassword);}}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}