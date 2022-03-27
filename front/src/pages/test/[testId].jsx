import { getAllTestIds, getTestData } from 'lib/psychologicalTest';
import React from 'react';

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
  return <div>{JSON.stringify(testData)}</div>;
};

export default test;
