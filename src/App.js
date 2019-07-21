import React from 'react';
import { Route } from 'react-router-dom';
import SignIn from './components/SignIn';

import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">    
      <Container component="main" maxWidth="xs">
        <Route path='/' exact component={SignIn}/>
      </Container>
    </div>
  );
}

export default App;
