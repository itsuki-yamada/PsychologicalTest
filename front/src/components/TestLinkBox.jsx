import { Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

const TestLinkBox = ({ test, link }) => {
  return (
    <LinkBox
      as="article"
      maxW="full"
      p="2"
      borderWidth="1px"
      rounded="md"
      borderColor="whiteAlpha.600"
      _hover={{ bg: 'pink' }}
    >
      <Heading size="md" my="2">
        <NextLink href={link} passHref>
          <LinkOverlay color="pink.400">{test.title}</LinkOverlay>
        </NextLink>
      </Heading>
      <Text mb="3">{test.description}</Text>
    </LinkBox>
  );
};

export default TestLinkBox;
