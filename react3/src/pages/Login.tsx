/** @format */

import { useState, useRef } from 'react';
import { Input } from './../components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState(''); // controlled component
  const [password, setPassword] = useState(''); //control component
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

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
    let usernameVal = '',
      passwordVal = '';
    if (inputRef.current?.username) {
      usernameVal = inputRef.current?.username.value;
    }
    if (inputRef.current?.password) {
      passwordVal = inputRef.current?.password.value;
    }
    if (usernameVal && passwordVal) {
      navigate('/');
    }
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
