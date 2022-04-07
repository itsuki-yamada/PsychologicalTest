import { DeleteIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';

const InputAnswerText = ({
  id = '',
  label = '',
  placeholder = '',
  isRequired = false,
  onDelete = undefined,
}) => {
  return (
    <FormControl isRequired={isRequired} marginBottom="0.5em">
      {label ? <FormLabel htmlFor={id}>{label}</FormLabel> : ''}
      <InputGroup>
        <Input {...{ id }} type="text" placeholder={placeholder} />
        <InputRightElement width="4.5em">
          {onDelete ? (
            <DeleteIcon
              size="sm"
              onClick={(e) => onDelete()}
              cursor="pointer"
            />
          ) : (
            ''
          )}
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default InputAnswerText;
