import { Button, Heading, SimpleGrid } from '@chakra-ui/react';

// TODO:レイアウト整える
export const Question = ({ question, onClick = () => {} }) => {
  return (
    <>
      <Heading size="md" marginBottom="1em">
        Q. {question.question}
      </Heading>
      <SimpleGrid>
        {question.answer.map((answer, index) => {
          return (
            <Button
              key={index}
              onClick={() => onClick(answer.nextAction)}
              marginBottom="1em"
            >
              <h1>{answer.answer}</h1>
            </Button>
          );
        })}
      </SimpleGrid>
    </>
  );
};
