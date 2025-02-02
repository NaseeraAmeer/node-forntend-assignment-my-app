import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

function ChatBotScreen() {
  
  const handleOpenClientWebsite = () => {
    window.open('https://client-website.com', '_blank')
  };

  const handleShareFeedback = () => {
    alert("Share Feedback button clicked!");
    // Add your feedback sharing logic here
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Bar */}
      <AppBar position="static">
        <Toolbar>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat Bot Interface
            <Button color="inherit" onClick={handleShareFeedback}>
              Chat bot not working as intended? Share feedback.
            </Button>
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ padding: 2 }}>
        <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleOpenClientWebsite}
          >
            Open Client's Website
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ChatBotScreen;