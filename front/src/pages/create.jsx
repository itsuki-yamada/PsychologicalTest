import { Container, Heading } from '@chakra-ui/react';
import CreateTestForm from 'components/model/createTestForm/CreateTestForm';
import React from 'react';

const create = () => {
  return (
    <Container maxW="xl">
      <Heading>Create Test Form</Heading>
      <CreateTestForm />
    </Container>
  );
};

export default create;
