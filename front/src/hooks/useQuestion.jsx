import { useRouter } from 'next/router';
import { useState } from 'react';

export const useQuestion = (initQId = '') => {
  const router = useRouter();
  const [currentQId, setCurrentQid] = useState(initQId);
  const nextActionHandler = (nextAction) => {
    if (!nextAction) return;
    switch (nextAction.type) {
      case 'question':
        setCurrentQid(nextAction.id);
        break;
      case 'result':
        router.push('/');
        break;
      default:
        break;
    }
  };
  return [currentQId, (args) => nextActionHandler(args)];
};
