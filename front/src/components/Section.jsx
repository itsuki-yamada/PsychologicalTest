import { Box, Heading } from '@chakra-ui/react';

export const Section = ({ children }) => (
  <Box mb={4} p={3}>
    {children}
  </Box>
);

export const SectionTitle = ({ children }) => (
  <Heading size="lg" my={2}>
    {children}
  </Heading>
);
