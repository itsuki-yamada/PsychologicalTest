import { Button, SimpleGrid } from '@chakra-ui/react';

// TODO:レイアウト整える
export const Question = ({ question, onClick = () => {} }) => {
  return (
    <>
      <h1>Q. {question.question}</h1>
      <SimpleGrid>
        {question.answer.map((answer, index) => {
          return (
            <Button key={index} onClick={() => onClick(answer.nextAction)}>
              <h1>{answer.answer}</h1>
            </Button>
          );
        })}
      </SimpleGrid>
    </>
  );
};
