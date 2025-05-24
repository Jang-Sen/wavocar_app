import React from 'react';
import { Text } from '@react-navigation/elements';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const { data } = useMutation({
  mutationFn: async (input: object) => {
    const { data } = await axios.post(
      'http://localhost:81/api/v1/auth/signup',
      input,
    );

    return data;
  },
});

const Signup: React.FC = () => {
  return <Text>Signup</Text>;
};

export default Signup;
