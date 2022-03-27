import { Container } from '@chakra-ui/react';
import NavBar from 'components/NavBar';
import React from 'react';

const main = ({ children, router }) => {
  return (
    <>
      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </>
  );
};

export default main;
