import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Link, Box } from '@mui/material';

const EmailVerification = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [step, setStep] = useState(1); // 1: Email input, 2: Code verification

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Simulate sending a verification code to the email
    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    setVerificationCode(generatedCode);
    alert(`Verification code sent to ${email}: ${generatedCode}`);
    setStep(2);
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (code === verificationCode) {
      alert('Email verified successfully!');
      // Proceed with registration logic here
    } else {
      alert('Invalid verification code. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Email Verification
        </Typography>
        {step === 1 ? (
          <form onSubmit={handleEmailSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Send Verification Code
            </Button>
          </form>
        ) : (
          <form onSubmit={handleCodeSubmit}>
            <TextField
              fullWidth
              label="Verification Code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              <Link href="organisation" color="warning">Verify Code</Link>
            </Button>
          </form>
        )}
      </Box>
    </Container>
  );
};

export default EmailVerification;