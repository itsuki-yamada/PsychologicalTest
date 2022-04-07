// TODO: value, setValue, maxDigit

import { useEffect, useState } from 'react';

export const useInputText = ({
  initialState = '',
  maxDigit = undefined,
  validFn = () => {
    return true;
  },
} = {}) => {
  const [text, setText] = useState(initialState);
  const [isError, setIsError] = useState(false);

  // 有効桁チェック
  const isValidDigit = (newText) => {
    if (maxDigit && newText.length > maxDigit) return false;
    return true;
  };

  // バリデーションチェック
  const isValid = (newText) => {
    return validFn(newText) && isValidDigit(newText);
  };

  // データセットハンドラー
  const setTextHandler = (newText) => {
    setIsError(!isValid(newText));
    setText(newText);
  };

  useEffect(() => {
    setTextHandler(text);
  }, []);

  return [text, isError, (args) => setTextHandler(args)];
};
