import React from 'react';
import Confetti from 'react-confetti';
import { Button, Typography, Box } from '@mui/material';

function SuccessScreen(setScreen) {

  return (

    <Box textAlign="center">
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <Typography variant="h4" gutterBottom>
        🎉 Integration Successful! 🎉
      </Typography>
      <Button variant="contained" color="primary" style={{ margin: '10px' }}>
        Explore Admin Panel
      </Button>
      <Button variant="contained" color="secondary" style={{ margin: '10px' }}>
        Start Talking to Your Chatbot
      </Button>
      <Box marginTop={4}>
        <Typography variant="h6">Share the Good News!</Typography>
        <Button variant="outlined" style={{ margin: '5px' }} onClick={() => alert('Shared on Twitter')}>
          Twitter
        </Button>
        <Button variant="outlined" style={{ margin: '5px' }} onClick={() => alert('Shared on Facebook')}>
          Facebook
        </Button>
        <Button variant="outlined" style={{ margin: '5px' }} onClick={() => alert('Shared on LinkedIn')}>
          LinkedIn
        </Button>
      </Box>
    </Box>
  );
}

export default SuccessScreen;