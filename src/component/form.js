import React, { useState } from 'react';
import { TextField, Button, Typography, Link, Container, Box, } from '@mui/material';
import logo from "../assest/company logo.png";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const clientId="902482941091-ef344dm952e45jmop3klgrrobiq3dubc.apps.googleusercontent.com"

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const responseMessage = (response) => {
    console.log('Login Success:', response);
    // Handle the response (e.g., send the credential to your backend for verification)
  };

  const errorMessage = (error) => {
    console.log('Login Failed:', error);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img width="45" height="30" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          src={logo}
          alt="company logo" />
        <Typography variant="h4" component="h1" gutterBottom color='primary'>
          Nase Tech
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Link href="#" variant="body2" >
            Forgot Password?
          </Link>
          <Link href="#" variant="body2">
            Sign In
          </Link>
        </Box>
         <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSignUp}
        > 
          <Link href="verify" color="warning">
          Sign Up
          </Link>
         </Button> 
      
    <GoogleOAuthProvider clientId={clientId} >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="10vh"
      >
          <GoogleLogin
          onSuccess={responseMessage}
          onError={errorMessage}
          render={(renderProps) => (
            <Button
              variant="contained"
              color="primary"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled} gutterBottom
            >
            <Link href = "google">Sign in with Google</Link>
              
            </Button>
          )}
        />
      </Box>
    </GoogleOAuthProvider>
      </Box>
    </Container>
  );
};

export default RegistrationPage;