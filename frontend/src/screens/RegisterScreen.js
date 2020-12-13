import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  CloseButton,
  Spinner,
} from '@chakra-ui/react';
import RegisterForm from '../components/RegisterForm';

const RegisterScreen = ({ location, history }) => {
  const userRegister = useSelector((state) => state.userRegister);
  const {
    loading: loadingRegister,
    error: errorRegister,
    userCred,
  } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userCred) {
      history.push(redirect);
    }
  }, [history, userCred, redirect]);

  return (
    <Box>
      {errorRegister && (
        <Alert status="error">
          <AlertIcon w="2rem" />
          <AlertDescription fontSize="0.89rem">
            {errorRegister}
          </AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      )}
      {loadingRegister && <Spinner />}
      <RegisterForm />
    </Box>
  );
};

export default RegisterScreen;
