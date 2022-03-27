import { Container, SimpleGrid, Stack } from '@chakra-ui/react';
import { LinkCard } from 'components/LinkCard';
import { Section, SectionTitle } from 'components/Section';
import TestLinkBox from 'components/TestLinkBox';
import { getAllTestHeaders } from 'lib/psychologicalTest';

export const getStaticProps = async (context) => {
  // sample心理テストデータ読み込み
  const testHeaders = getAllTestHeaders();
  return {
    props: { testHeaders },
  };
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
            <TestLinkBox
              key={test.id}
              test={{ ...test }}
              link={`/test/${test.id}`}
            />
          ))}
        </Stack>
      </Section>
    </Container>
  );
};

export default Index;
