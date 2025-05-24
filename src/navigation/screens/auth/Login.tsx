import React from 'react';
import { Text } from '@react-navigation/elements';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const { data } = useMutation({
  mutationFn: async (userInput: { email: string; password: string }) => {
    const { data } = await axios.post(
      'http://localhost:81/api/v1/auth/login',
      userInput,
    );

    return data;
  },
});

const Login: React.FC = () => {
  return <Text>Login</Text>;
};

export default Login;
