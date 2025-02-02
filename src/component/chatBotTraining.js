import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  CircularProgress,
  Button,
  LinearProgress,
  Box,
  Paper,
  Link,
} from "@mui/material";

function ChatbotTraining() {
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [isTrainingComplete, setIsTrainingComplete] = useState(false);

  // Simulate chatbot training progress
  useEffect(() => {
    if (trainingProgress < 100) {
      const timer = setInterval(() => {
        setTrainingProgress((prevProgress) =>
          prevProgress >= 100 ? 100 : prevProgress + 10
        );
      }, 1000); // Update progress every second
      return () => clearInterval(timer);
    } else {
      setIsTrainingComplete(true); // Mark training as complete
    }
  }, [trainingProgress]);

  const handleMoveToNextStep = () => {
    alert("Moving to the next step of the setup...");
    // Add logic to navigate to the next step
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Chatbot Training
        </Typography>
        {!isTrainingComplete ? (
          <>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Your chatbot is being trained. Please wait...
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CircularProgress sx={{ marginRight: 2 }} />
              <LinearProgress
                variant="determinate"
                value={trainingProgress}
                sx={{ width: "100%", marginRight: 2 }}
              />
              <Typography variant="body2">{trainingProgress}%</Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleMoveToNextStep}
              sx={{ marginTop: 3 }}
            >
              Move to Next Step
            </Button>
          </>
        ) : (
          <>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Chatbot training is complete!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleMoveToNextStep}
            >
              <Link href="chatbotscreen" color="warning"> Proceed to Next Step</Link>
             </Button>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default ChatbotTraining;
