/** @format */
import { forwardRef } from 'react';
import TextField from '@mui/material/TextField';

type Props = {
  label: string;
  value?: string;
  inputKey: 'username' | 'password';
  onChange?: (type: string, e: any) => void;
  type?: string;
  defaultValue?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      value,
      inputKey,
      onChange = () => {},
      type = 'text',
      defaultValue,
    }: Props,
    ref
  ) => {
    return (
      <div>
        <TextField
          id='outlined-basic'
          label={label}
          variant='outlined'
          defaultValue={defaultValue}
          type={type}
          inputRef={ref}
          style={{
            width: '100%',
            marginBottom: 10,
          }}
          onChange={(e) => onChange(inputKey, e)}
          value={value}
        />
      </div>
    );
  }
);

export default Input;

/**
 * 1. Separate the Input into an isolated component
 * 2. Add Input in the form, handle form in 2 ways:
 * 	- controlled component: useState
 *  - uncontrolled component: useRef
 */
