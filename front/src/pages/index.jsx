import {
  Box,
  Center,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import TestLinkBox from 'components/TestLinkBox';
import { getAllTestHeaders } from 'lib/psychologicalTest';
import NextLink from 'next/link';

export const getStaticProps = async (context) => {
  // sample心理テストデータ読み込み
  const testHeaders = getAllTestHeaders();
  return {
    props: { testHeaders },
  };
};

const Section = ({ children }) => (
  <Box mb={4} p={3}>
    {children}
  </Box>
);

const SectionTitle = ({ children }) => (
  <Heading size="lg" my={2}>
    {children}
  </Heading>
);

const LinkCard = ({ link = '#', title }) => {
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

const Index = ({ testHeaders, router }) => {
  return (
    <Container maxW="xl">
      <Section>
        <SectionTitle>Thanks for Coming!</SectionTitle>
        <p>心理テストAppへようこそ。</p>
        <p>
          ここでは自由に心理テストを受けたり、作成したりして遊ぶことができます。ぜひ遊んでいってください。
        </p>
      </Section>
      <Section>
        <SectionTitle>Feature</SectionTitle>
        <SimpleGrid columns={2} spacing={4}>
          <LinkCard title="Create" link="/create" />
          <LinkCard title="Testing" />
        </SimpleGrid>
      </Section>
      <Section>
        <SectionTitle>Tests</SectionTitle>
        <Stack>
          {testHeaders.map((test) => (
            <TestLinkBox test={{ ...test }} link={'/test'} />
          ))}
        </Stack>
      </Section>
    </Container>
  );
};

export default Index;
