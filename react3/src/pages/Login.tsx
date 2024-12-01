/** @format */

import { useState, useRef } from 'react';
import { Input } from './../components';
import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN } from '../store/reducers/authReducer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Login = () => {
  const [username, setUsername] = useState(''); // controlled component
  const [password, setPassword] = useState(''); //control component
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const auth = useSelector((state: { auth: any }) => state.auth);
  const dispatch = useDispatch();
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
    console.log(inputRef.current);
    if (inputRef.current?.username) {
      usernameVal = inputRef.current?.username.value;
    }
    if (inputRef.current?.password) {
      passwordVal = inputRef.current?.password.value;
    }
    if (usernameVal && passwordVal) {
      dispatch({
        type: LOGIN,
        username: usernameVal,
        password: passwordVal,
      });
    }
  };
  console.log('auth ', auth);

  if (auth.isLoggedIn) {
    return <Navigate to='/' replace={true} />;
  }
  return (
    <div
      style={{
        backgroundColor: 'gray',
        minHeight: '100vh',
        paddingTop: 10,
      }}>
      <Box
        component='form'
        onSubmit={handleSubmit}
        style={{
          margin: 'auto',
          backgroundColor: 'white',
          width: 350,
          padding: 20,
          borderRadius: 10,
        }}>
        <Input
          label='Username'
          inputKey='username'
          defaultValue={''}
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
        <Stack direction='row' spacing={2}>
          <Button type='submit' variant='contained' size='small'>
            Login
          </Button>
          <Button type='button' variant='outlined' size='small'>
            Cancel
          </Button>
          <Button type='button' size='small'>
            Forgot password
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Login;
