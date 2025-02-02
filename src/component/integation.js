import React from 'react';
import { Button, AppBar, Toolbar, Link } from '@mui/material';

 function ChatBoxIntegation (){
  const handleTestChatbot = () => {
    window.open('https://client-website.com', '_blank');
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button variant="contained" color="primary" onClick={handleTestChatbot} style={{ margin: '10px' }}>
          <Link href="integration" color="warning">Test Chatbot</Link>
          </Button>
          <Button color="inherit" onClick={() => alert('Redirect to feedback form')}>
            Chat bot not working as intended? Share feedback.
          </Button>
        </Toolbar>
      </AppBar>
   
    </div>
  );
}
 

export default ChatBoxIntegation;