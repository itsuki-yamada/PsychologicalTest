import { useRouter } from 'next/router';
import React from 'react';

const test = (props) => {
  const router = useRouter();
  const { testId } = router.query;
  return <div>{testId}</div>;
};

export default test;
