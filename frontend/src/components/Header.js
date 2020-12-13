import React from 'react';
import * as Chakra from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userCred } = userLogin;

  const _logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Chakra.Box bgColor="gray.800" height="10vh">
      <Chakra.Container maxW="lg">
        <Chakra.Box
          py={{ base: '1.89rem', md: '1rem' }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Chakra.Box>
            <Chakra.Text
              color="gray.50"
              fontSize={{ base: '0.89rem', md: '1.2rem', lg: '1.5rem' }}
            >
              Paste-a Gram
            </Chakra.Text>
          </Chakra.Box>
          {userCred ? (
            <Chakra.Box color="gray.50" display="flex" alignItems="center">
              <Link to="/posts">Posts</Link>
              <Chakra.Avatar ml="0.89rem" size="sm" name={userCred.name} />
              <Chakra.Button
                color="black"
                ml="0.89rem"
                onClick={_logoutHandler}
              >
                Logout
              </Chakra.Button>
            </Chakra.Box>
          ) : (
            <Chakra.Box color="gray.50">
              <Link style={{ marginRight: '1rem' }} to="/login">
                <i style={{ marginRight: '.5rem' }} className="fas fa-user"></i>{' '}
                Sign In
              </Link>
              <Link to="/register">
                <i
                  style={{ marginRight: '.5rem' }}
                  className="fas fa-address-book"
                ></i>{' '}
                Sign Up
              </Link>
            </Chakra.Box>
          )}
        </Chakra.Box>
      </Chakra.Container>
    </Chakra.Box>
  );
};

export default Header;
