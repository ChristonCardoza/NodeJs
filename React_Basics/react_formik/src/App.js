import './App.css';
import OldYoutubeForm from './components/OldYoutubeForm';
import YoutubeForm from './components/YoutubeForm';
import FormikContainer from './components/FormikContainer';
import LoginFile from './components/LoginFile';
import RegistrationForm from './components/RegistrationForm';
import EnrollmentForm from './components/EnrollmentForm';

import {theme, ThemeProvider } from '@chakra-ui/react'
import ChakraLoginForm from './components/ChakraLoginForm';

function App() {
  // return (
  //   <div className="App">

  //     {/* <OldYoutubeForm /> */}

  //     {/* <YoutubeForm /> */}

  //     {/* <FormikContainer /> */}

  //     {/* <LoginFile /> */}

  //     {/* <RegistrationForm /> */}

  //     {/* <EnrollmentForm /> */}

  //   </div>
  // );

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <ChakraLoginForm />
        </div>
      </ThemeProvider>
    );
}

export default App;
