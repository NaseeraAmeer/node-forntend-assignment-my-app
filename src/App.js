import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from "./component/form";
import EmailVerification from "./component/verificationForm";
import { Container } from '@mui/material';
import SetupOrganizationForm from './component/setupOrganisationForm';
import WebpageTable from "./component/chatBot";
import Chatbot from "./component/chatBotTraining";
import ChatBotScreen from './component/finalScreen';
import TestChatBot from "./component/testChatBot";
import IntegrateButton from "./component/integrationScreen";
import SuccessScreen from './component/successScreen';
import FailureScreen from './component/faliureScreen';
import LastChatBot from './component/lastChatBot';


function App() {

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/verify" element={<EmailVerification />} />
          <Route path="/organisation" element={<SetupOrganizationForm />} />
          <Route path="/webpage" element={<WebpageTable />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/chatbotscreen" element={<ChatBotScreen />} />
          <Route path="/testchatbot" element={<TestChatBot />} />
          <Route path="/integratebutton" element={<IntegrateButton />} />
          <Route path="/lastchatbot" element={<LastChatBot />} />
          <Route path="/successscreen" element={<SuccessScreen />} />
          <Route path="/failurescreen" element={<FailureScreen />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;