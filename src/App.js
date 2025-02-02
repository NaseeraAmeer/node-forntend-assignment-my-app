// import RegistrationPage from "./component/form";
// import EmailVerification from"./component/verificationForm";
// import './App.css';

// function App() {
//   return (
//     <div >
//       <div>
//         <RegistrationPage/>
      
//       <EmailVerification/></div>



//     </div>
//   );
// }

// export default App;

import {React} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RegistrationPage from "./component/form";
import EmailVerification from"./component/verificationForm";
import { Container } from '@mui/material';
import SetupOrganizationForm from './component/setupOrganisationForm';
import WebpageTable from"./component/chatBot";
import Chatbot from "./component/chatBotTraining";
// import ChatBoxIntegation from"./component/integation";
// import IntegrationScreen from './component/integrationScreen';
// import SuccessScreen from './component/successScreen';
// import FailureScreen from './component/faliureScreen';
import ChatBotScreen from './component/finalScreen';
import TestChatBot from "./component/testChatBot";
import IntegrateButton from"./component/integrationScreen";
import SuccessScreen from './component/successScreen';
import FailureScreen from './component/faliureScreen';
import LastChatBot from './component/lastChatBot';

// import IntegrationScreen from './component/integrationScreen';


  function App() {
      // const [screen, setScreen] = useState(''); // 'integration', 'success', 'failure'
    
  return (
 
    
    <Router>
        <Container>
        <Routes>
          <Route path="/" element={<RegistrationPage/> }/>
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
      {/* <Container style={{ marginTop: '20px' }}>
                {screen === 'integration' && <IntegrationScreen setScreen={setScreen} />}
                {screen === 'success' && <SuccessScreen />}
                {screen === 'failure' && <FailureScreen setScreen={setScreen} />}
              </Container> */}
    </Router>
    
  );
}

export default App;