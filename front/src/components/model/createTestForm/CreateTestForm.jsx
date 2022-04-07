import { AddIcon } from '@chakra-ui/icons';
import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import InputTextarea from 'components/InputTextarea';
import InputAnswerText from 'components/model/createTestForm/parts/InputAnswerText';
import { useInputText } from 'hooks/useInputText';
import React from 'react';

const CreateTestForm = () => {
  const [title, setTitle] = useInputText();
  const [description, setDescription] = useInputText();

  let answerSequence = 1;
  return (
    <>
      <FormControl isRequired>
        <FormLabel htmlFor="testTitle">TestTitle</FormLabel>
        <Input
          id="testTitle"
          type="text"
          placeholder="test title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormHelperText>1文字以上30文字以内</FormHelperText>
      </FormControl>

      <InputTextarea
        label="description"
        id="testDescription"
        placeholder="test question"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        isRequired={true}
      />
      <InputTextarea
        label="FirstQuestion"
        id="firstQuestion"
        placeholder="first question"
        isRequired={true}
      />

      <FormLabel>answers</FormLabel>
      {[1, 2].map((_, i) => {
        return (
          <InputAnswerText
            key={i}
            isRequired={true}
            id={answerSequence++}
            placeholder="answer"
          />
        );
      })}

      <Flex justify="flex-end" marginBottom="0.5em" cursor="pointer">
        <AddIcon boxSize="1em" onClick={() => {}} />
      </Flex>

      <InputAnswerText
        isRequired={true}
        id={answerSequence++}
        placeholder="answer"
        onDelete={() => console.log('click onDelete')}
      />
    </>
  );
};

export default CreateTestForm;
