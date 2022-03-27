import { Center, LinkBox, LinkOverlay } from '@chakra-ui/react';
import NextLink from 'next/link';

export const LinkCard = ({ link = '/', title }) => {
  return (
    <LinkBox
      height={16}
      borderWidth="1px"
      rounded="md"
      borderColor="whiteAlpha.600"
      _hover={{ bg: 'pink' }}
    >
      <Center h="full">
        <NextLink href={link} passHref>
          <LinkOverlay fontWeight="bold" fontSize="lg">
            {title}
          </LinkOverlay>
        </NextLink>
      </Center>
    </LinkBox>
  );
};
