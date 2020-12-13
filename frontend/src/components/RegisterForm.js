import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Chakra from '@chakra-ui/react';
import * as Yup from 'yup';
import { register } from '../actions/userActions';

const RegisterForm = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6).required('Password is required'),
  });

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={(values) => {
        dispatch(register(values.name, values.email, values.password));
      }}
      validationSchema={SignupSchema}
    >
      {(props) => (
        <Form>
          <Field name="name">
            {({ field, form }) => (
              <Chakra.FormControl
                isInvalid={form.errors.name && form.touched.name}
              >
                <Chakra.FormLabel htmlFor="name">Name</Chakra.FormLabel>
                <Chakra.Input
                  {...field}
                  id="name"
                  placeholder="name"
                  w={[300, 450, 560]}
                />
                <Chakra.FormErrorMessage>
                  {form.errors.name}
                </Chakra.FormErrorMessage>
              </Chakra.FormControl>
            )}
          </Field>
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
              Register
            </Chakra.Button>
          </Chakra.Box>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
