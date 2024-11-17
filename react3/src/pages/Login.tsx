/** @format */

import { useState, useRef } from 'react';
import { Input } from './../components';

const Login = () => {
  const [username, setUsername] = useState(''); // controlled component
  const [password, setPassword] = useState(''); //control component
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const usernameRef = useRef<HTMLInputElement>(null); // uncontroled component
  const passwordRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleOnChange = (type: string, event: any) => {
    setFormData({
      ...formData,
      [type]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault(); //
    // console.log('usernameRef ', usernameRef);
    // console.log('passwordRef ', passwordRef);
    console.log('inputRef ', inputRef);
    if (usernameRef.current) {
      const username = usernameRef.current.value;
      console.log('username ', username);
    }

    if (inputRef.current?.username) {
      const username = inputRef.current?.username.value;
      console.log('username input ref ', username);
    }
    if (inputRef.current?.password) {
      const password = inputRef.current?.password.value;
      console.log('password input ref ', password);
    }
    // if (passwordRef.current) {
    //   const password = passwordRef.current.value;
    //   console.log('password ', password);
    // }
    // console.log('usernameRef ', usernameRef);
    console.log('username ', username);
    console.log('password ', password);
  };
  console.log('render form');
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Username'
        // value={formData.username}
        inputKey='username'
        defaultValue={''}
        // onChange={handleOnChange}
        // ref={usernameRef}
        ref={(element) => (inputRef.current['username'] = element)}
      />
      <Input
        label='Password'
        value={formData.password}
        inputKey='password'
        type='password'
        onChange={handleOnChange}
        ref={(element) => (inputRef.current['password'] = element)}
        // ref={passwordRef}
      />
      <button type='submit'>Login</button>
      <button type='button'>Cancel</button>
      <button type='button'>Forgot password</button>
    </form>
  );
};

export default Login;
