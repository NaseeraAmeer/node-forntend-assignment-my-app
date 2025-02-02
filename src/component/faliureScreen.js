import React from 'react';
import { Button, Typography, Box } from '@mui/material';

function FailureScreen({ setScreen }) {
  return (
    <Box textAlign="center">
      <Typography variant="h4" gutterBottom>
        ❌ Integration Not Detected
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please ensure the integration code is correctly placed in the <code>&lt;head&gt;</code> of your website.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setScreen('integration')}>
        Retry Integration
      </Button>
    </Box>
  );
}

export default FailureScreen;