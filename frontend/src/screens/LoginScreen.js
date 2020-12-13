import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  CloseButton,
  Spinner,
} from '@chakra-ui/react';
import LoginForm from '../components/LoginForm';

const LoginScreen = ({ location, history, isSubmitting }) => {
  const [close, setClose] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading: loadingLogin, error: errorLogin, userCred } = userLogin;

  const _closeHandler = () => {
    setClose(true);
  };

  useEffect(() => {
    if (userCred) {
      history.push('/posts');
    }
  }, [history, userCred]);

  return (
    <Box>
      {errorLogin && !close && (
        <Alert marginBottom="2" status="error">
          <AlertIcon w="2rem" />
          <AlertDescription fontSize="0.89rem">{errorLogin}</AlertDescription>
          <CloseButton
            onClick={_closeHandler}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}
      {loadingLogin && <Spinner />}
      <LoginForm />
    </Box>
  );
};

export default LoginScreen;
