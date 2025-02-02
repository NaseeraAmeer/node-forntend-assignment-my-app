import { Box, Button, Link } from '@mui/material';
import React from 'react'

function finalScreen() {
   
    const handleTestChatBot = () => {
      console.log("TestChatBot");
    
    }
    const handleChatBotIntegration = () => {
      console.log("TestChatBotIntegration");
      
    }
    const handleTestIntegation = () => {
      console.log("handleTestIntegation");
      
    }
    
  return (
    <div >
      <Box>
      <Button
          variant="contained"
          color="primary"
          onClick={handleTestChatBot}
          sx={{ marginBottom: 2 }}
        ><Link href="testchatbot" color="warning">Test Chat Bot</Link>
     
        </Button>
        <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleChatBotIntegration}
          sx={{ marginBottom: 2 }}
        ><Link href="integratebutton" color="warning">Chatbox Integration</Link>
        </Button>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleTestIntegation}
          sx={{ marginBottom: 2 }}
        ><Link href="lastchatbot" color="warning">Test Integration</Link>
        </Button>
        </Box>
    </div>
  )
  }

export default finalScreen;


          