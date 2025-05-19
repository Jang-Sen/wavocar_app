import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from '@react-navigation/elements';

const CarItem = ({ car }) => {
  const { navigate } = useNavigation();

  console.log(car);

  return (
    <TouchableOpacity onPress={() => navigate('CarDetail', { id: car.id })}>
      <View style={{ margin: 10, padding: 5, alignItems: 'center' }}>
        <Image
          source={
            car.carImgs
              ? car.carImgs[0]
              : 'https://png.pngtree.com/png-vector/20190418/ourmid/pngtree-bin-file-document-icon-png-image_951413.jpg'
          }
          style={{
            width: 60,
            height: 60,
          }}
        />
        <Text>{car.carName}</Text>
        <Text>$ {car.price}</Text>
        <Text>{car.grade}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CarItem;
