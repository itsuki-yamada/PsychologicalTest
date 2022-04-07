import { ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Center } from '@chakra-ui/react';
import { Question } from 'components/model/Question';
import { Section, SectionTitle } from 'components/Section';
import { useQuestion } from 'hooks/useQuestion';
import { getAllTestIds, getTestData } from 'lib/psychologicalTest';

export async function getStaticPaths() {
  const testIds = getAllTestIds();
  const paths = testIds.map((testId) => ({ params: { testId: testId.id } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const testData = await getTestData(params.testId);
  return {
    props: {
      testData,
    },
  };
}

const test = ({ testData }) => {
  console.log(testData);
  // TODO: ここQuestion管理とアクション管理でStateを分けたほうがいい気もする。
  const [currentQId, execNextAction] = useQuestion('');
  return (
    <>
      <Section>
        <SectionTitle>{testData.title}</SectionTitle>
        {testData.description}
      </Section>
      <Section>
        {!!currentQId ? (
          <Question
            question={testData.question[currentQId]}
            onClick={execNextAction}
          />
        ) : (
          <Center>
            <Button
              onClick={() => execNextAction(testData.firstAction)}
              rightIcon={<ChevronRightIcon />}
              _hover={{ bg: 'pink' }}
            >
              Start
            </Button>
          </Center>
        )}
      </Section>
    </>
  );
};

export default test;
