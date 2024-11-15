/** @format */
import { forwardRef } from 'react';
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
        <label>{label}</label>
        <input
          type={type}
          ref={ref}
          defaultValue={defaultValue}
          value={value}
          onChange={(e) => onChange(inputKey, e)}
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
