import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import React from 'react';

const InputTextarea = ({
  id = '',
  label = '',
  placeholder = '',
  isRequired = false,
  size = 'md',
  ...props
}) => {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel htmlFor="firstQuestion">{label}</FormLabel>
      <Textarea
        id="firstQuestion"
        size="md"
        placeholder="firstQuestion"
        resize="vertical"
        {...props}
      />
    </FormControl>
  );
};

export default InputTextarea;
