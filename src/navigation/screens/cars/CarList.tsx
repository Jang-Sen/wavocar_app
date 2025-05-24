import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useCarList } from '../../../hooks/useCarList';
import { Block, Text } from '../../components';
import { theme } from '../../../constants';
import CarItem from '../../components/CarItem';

const CarList: React.FC = () => {
  const { data: cars, isLoading, isError, error } = useCarList();

  const [active, setActive] = useState('이동');

  const tabs = useMemo(() => ['이동', '숙박']);

  const handleTab = (tab: string) => setActive(tab);

  const renderTab = (tab: string) => {
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
        style={[styles.tab, isActive && styles.active]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  if (isLoading) return <Text>로딩 중...</Text>;
  if (isError) return <Text>에러가 발생했습니다.</Text>;

  return (
    <Block style={{ marginTop: 55 }}>
      <Block flex={false} row center space={'between'} style={styles.header}>
        <Text h1 bold>
          WAVOCAR MAIN
        </Text>
      </Block>
      <Block flex={false} row style={styles.tabs}>
        {tabs.map((tab) => renderTab(tab))}
      </Block>
      {active === '이동' && (
        <FlatList
          data={cars}
          renderItem={({ item }) => <CarItem car={item} />}
          keyExtractor={(item) => item.id.toString()}
          // horizontal
        />
      )}
      {active === '숙박' && (
        <Text h1 semibold>
          숙박
        </Text>
      )}
      {/*<FlatList*/}
      {/*  data={cars}*/}
      {/*  renderItem={({ item }) => <CarItem car={item} />}*/}
      {/*  keyExtractor={(item) => item.id.toString()}*/}
      {/*  // horizontal*/}
      {/*/>*/}
    </Block>
    // <View style={styles.container}>
    //   <FlatList
    //     data={cars}
    //     renderItem={({ item }) => <CarItem car={item} />}
    //     keyExtractor={(item) => item.id.toString()}
    //     // horizontal
    //   />
    // </View>
    // <Text>{cars.length}</Text>
    // <ScrollView horizontal={true}>
    //     {cars?.map((cars, index) => (
    //         <TouchableOpacity onPress={() => navigation.navigate('CarDetail', {id: cars.id})}>
    //             <View style={{margin: 10, padding: 5, alignItems: 'center'}}>
    //                 <Image
    //                     source={cars.carImgs ? cars.carImgs[0] : 'https://png.pngtree.com/png-vector/20190418/ourmid/pngtree-bin-file-document-icon-png-image_951413.jpg'}
    //                     style={{
    //                         width: 60,
    //                         height: 60,
    //                     }}
    //                 />
    //                 <Text>
    //                     {cars.carName}
    //                 </Text>
    //                 <Text>
    //                     $ {cars.price}
    //                 </Text>
    //                 <Text>
    //                     {cars.grade}
    //                 </Text>
    //             </View>
    //         </TouchableOpacity>
    //     ))}
    // </ScrollView>
  );
};

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
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
});

export default CarList;
