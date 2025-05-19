import { FlatList, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import CarItem from '../components/CarItem';

export function Home() {
  const navigation = useNavigation();
  const [cars, setCars] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const getCars = async () => {
    try {
      const { data } = await axios.get(
        'http://localhost:81/api/v1/car/findAll?take=10',
      );
      console.log(data);

      setCars(data.body.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={(item) => item.id}
        horizontal
      />

      {/*<Text>{cars.length}</Text>*/}
      {/*<ScrollView horizontal={true}>*/}
      {/*    {cars?.map((car, index) => (*/}
      {/*        <TouchableOpacity onPress={() => navigation.navigate('CarDetail', {id: car.id})}>*/}
      {/*            <View style={{margin: 10, padding: 5, alignItems: 'center'}}>*/}
      {/*                <Image*/}
      {/*                    source={car.carImgs ? car.carImgs[0] : 'https://png.pngtree.com/png-vector/20190418/ourmid/pngtree-bin-file-document-icon-png-image_951413.jpg'}*/}
      {/*                    style={{*/}
      {/*                        width: 60,*/}
      {/*                        height: 60,*/}
      {/*                    }}*/}
      {/*                />*/}
      {/*                <Text>*/}
      {/*                    {car.carName}*/}
      {/*                </Text>*/}
      {/*                <Text>*/}
      {/*                    $ {car.price}*/}
      {/*                </Text>*/}
      {/*                <Text>*/}
      {/*                    {car.grade}*/}
      {/*                </Text>*/}
      {/*            </View>*/}
      {/*        </TouchableOpacity>*/}
      {/*    ))}*/}
      {/*</ScrollView>*/}
    </View>
  );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         gap: 10,
//     },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    gap: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
