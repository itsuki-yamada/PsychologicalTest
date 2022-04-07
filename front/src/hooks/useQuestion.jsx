import { useRouter } from 'next/router';
import { useState } from 'react';

// TODO: 選択されたテストデータを保持して、管理をこのhooksに任せたほうがよいかも?
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
        router.push(`/result/${nextAction.id}`);
        break;
      default:
        break;
    }
  };
  return [currentQId, (args) => nextActionHandler(args)];
};
