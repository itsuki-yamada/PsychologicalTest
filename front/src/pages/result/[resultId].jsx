import { Container } from '@chakra-ui/react';
import { getAllResultIds, getResultData } from 'lib/testResult';

export async function getStaticPaths() {
  const resultIds = getAllResultIds();
  const paths = resultIds.map((result) => ({
    params: { resultId: result.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const resultData = await getResultData(params.resultId);
  return {
    props: {
      ...resultData,
    },
  };
}

const result = ({ id, contentHtml }) => {
  return (
    <Container size="md">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Container>
  );
};

export default result;
