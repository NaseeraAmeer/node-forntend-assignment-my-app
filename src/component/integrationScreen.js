import React from 'react';
import { Button, Typography, Box } from '@mui/material';

function IntegrationScreen({ setScreen }) {
  
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Chatbot Integration
      </Typography>
      <Box marginTop={4}>
        <Typography variant="h6">Integrate on Your Website</Typography>
        <Typography variant="body1">
          Copy and paste the following code into the <code>&lt;head&gt;</code> of your website:
        </Typography>
        <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          {`<script src="https://dummy-chatbot-integration.com/chatbot.js"></script>`}
        </pre>
        <Button variant="outlined" onClick={() => alert('Instructions emailed to developer.')}>
          Mail Instructions to Developer
        </Button>
      </Box>
    </Box>
  );
}


export default IntegrationScreen;