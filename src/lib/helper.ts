import { FieldError } from 'react-hook-form';

export const returnCodeToBr = (text: string): string => {
  if (text === '') {
    return text;
  } else {
    return text.replace(/\r?\n/g, '<br/>');
  }
};

export const errorMessage = (value: FieldError) => {
  if (value) return value.message;
};
