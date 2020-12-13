import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import PostScreen from './screens/PostScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container py="2.5rem">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Switch>
            <Route path="/register" component={RegisterScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/posts" component={PostScreen} />
          </Switch>
        </Box>
      </Container>
    </BrowserRouter>
  );
};

export default App;
