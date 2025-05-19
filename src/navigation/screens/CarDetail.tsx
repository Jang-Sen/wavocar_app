import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from '@react-navigation/elements';
import { useRoute } from '@react-navigation/native';

const CarDetail = () => {
  const route = useRoute();

  const { id } = route.params;

  useEffect(() => {}, [id]);

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default CarDetail;
