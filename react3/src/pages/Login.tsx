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

  const handleOnChange = (type: string, event: any) => {
    setFormData({
      ...formData,
      [type]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault(); //
    console.log('usernameRef ', usernameRef);
    console.log('passwordRef ', passwordRef);
    if (usernameRef.current) {
      const username = usernameRef.current.value;
      console.log('username ', username);
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
        ref={usernameRef}
      />
      <Input
        label='Password'
        value={formData.password}
        inputKey='password'
        type='password'
        onChange={handleOnChange}
        ref={passwordRef}
      />
      <button type='submit'>Login</button>
      <button type='button'>Cancel</button>
      <button type='button'>Forgot password</button>
    </form>
  );
};

export default Login;
