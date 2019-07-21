import React from 'react';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import SignIn from './components/SignIn';
import Todo from './components/Todo';
import auth from './hoc/auth';
import redirect from './hoc/redirect';

function App() {
  return (
    <div className="App">    
      <Container component="main" maxWidth="xs">
        <Route path='/' exact component={redirect(SignIn, '/todo')}/>
        <Route path='/todo' excat component={auth(Todo)} />
      </Container>
    </div>
  );
}

export default App;

