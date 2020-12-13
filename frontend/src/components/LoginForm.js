import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Chakra from '@chakra-ui/react';
import * as Yup from 'yup';
import { login } from '../actions/userActions';

const LoginForm = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6).required('Password is required'),
  });

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        dispatch(login(values.email, values.password));
      }}
      validationSchema={LoginSchema}
    >
      {(props) => (
        <Form>
          <Field name="email">
            {({ field, form }) => (
              <Chakra.FormControl
                isInvalid={form.errors.email && form.touched.email}
              >
                <Chakra.FormLabel htmlFor="email">Email</Chakra.FormLabel>
                <Chakra.Input
                  {...field}
                  id="email"
                  placeholder="email"
                  w={[300, 450, 560]}
                />
                <Chakra.FormErrorMessage>
                  {form.errors.email}
                </Chakra.FormErrorMessage>
              </Chakra.FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }) => (
              <Chakra.FormControl
                isInvalid={form.errors.password && form.touched.password}
              >
                <Chakra.FormLabel htmlFor="password">Password</Chakra.FormLabel>
                <Chakra.Input
                  {...field}
                  id="password"
                  type="password"
                  placeholder="password"
                  w={[300, 450, 560]}
                />
                <Chakra.FormErrorMessage>
                  {form.errors.password}
                </Chakra.FormErrorMessage>
              </Chakra.FormControl>
            )}
          </Field>
          <Chakra.Box display="flex" justifyContent="center">
            <Chakra.Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Login
            </Chakra.Button>
          </Chakra.Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
