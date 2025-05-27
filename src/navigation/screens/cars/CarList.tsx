import React, { useMemo, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Block, Text } from '../../components';
import { theme, theme2 } from '../../../constants';
import { useCarList } from './hooks/useCarList';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const CarList: React.FC = () => {
  const { navigate } = useNavigation();

  const { data, isLoading, isError, error } = useCarList({ page: 1, take: 10 });

  const cars = data?.data;

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
        <Text title medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  console.log('width', width);

  const renderCar = (item, index) => {
    console.log('Item', item);
    // const isLastItem = index === cars.length - 1;

    return (
      // <View
      //   style={[
      //     styles.flex,
      //     styles.column,
      //     styles.recommendation,
      //     styles.shadow,
      //     index === 0 && { marginLeft: theme2.sizes.margin },
      //     // isLastItem && { marginRight: theme2.sizes.margin / 2 },
      //   ]}
      // >
      // <View style={[styles.flex, styles.recommendationHeader]}>
      <Block>
        <Image
          style={[styles.recommendationImage]}
          source={{
            uri:
              item.carImgs === null
                ? 'https://png.pngtree.com/png-vector/20190628/ourmid/pngtree-empty-box-icon-for-your-project-png-image_1521417.jpg'
                : item.carImgs,
          }}
        />
      </Block>
      // </View>
      // </View>
    );
  };

  const renderCarList = () => (
    <View style={[styles.flex, styles.column, styles.recommended]}>
      <View style={[styles.row, styles.recommendationHeader]}>
        <Text size={14} semibold>
          차량 리스트
        </Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text caption>more</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.column, styles.recommendedList]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={[styles.shadow, { overflow: 'visible' }]}
          data={cars}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => renderCar(item, index)}
        />
      </View>
    </View>
  );

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
        // <FlatList
        //   data={cars}
        //   renderItem={({ item }) => <CarItem car={item} />}
        //   keyExtractor={(item) => item.id.toString()}
        //   horizontal
        // />
        <ScrollView
          style={{ marginTop: 30 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: theme2.sizes.padding }}
        >
          {renderCarList()}
        </ScrollView>
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
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: theme2.colors.white,
    paddingHorizontal: theme2.sizes.padding,
    paddingTop: theme2.sizes.padding * 1.33,
    paddingBottom: theme2.sizes.padding * 0.66,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articles: {},
  destinations: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  destination: {
    width: width - theme2.sizes.padding * 2,
    height: width * 0.6,
    marginHorizontal: theme2.sizes.margin,
    paddingHorizontal: theme2.sizes.padding - 2,
    paddingVertical: theme2.sizes.padding * 0.66,
    borderRadius: theme2.sizes.radius,
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: theme2.sizes.radius,
    paddingHorizontal: theme2.sizes.padding,
    paddingVertical: theme2.sizes.padding / 2,
    bottom: 20,
    left:
      (width - theme2.sizes.padding * 4) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: theme2.colors.white,
    width: width - theme2.sizes.padding * 4,
  },
  recommended: { width: width, height: height / 3 },
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: theme2.sizes.padding,
  },
  recommendedList: {},
  recommendation: {
    width: (width - theme2.sizes.padding * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: theme2.colors.white,
    overflow: 'hidden',
    borderRadius: theme2.sizes.radius,
    marginVertical: theme2.sizes.margin * 0.5,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: theme2.sizes.radius,
    borderTopLeftRadius: theme2.sizes.radius,
    backgroundColor: 'red',
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme2.sizes.padding / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: theme2.sizes.font / 1.25,
    color: theme2.colors.black,
    marginVertical: theme2.sizes.margin / 5,
  },
  recommendationImage: {
    width: (width - theme2.sizes.padding * 2) / 2,
    height: (width - theme2.sizes.padding * 2) / 2,
  },
  avatar: {
    width: theme2.sizes.padding,
    height: theme2.sizes.padding,
    borderRadius: theme2.sizes.padding / 2,
  },
  rating: {
    fontSize: theme2.sizes.font * 2,
    color: theme2.colors.white,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: theme2.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme2.colors.gray,
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme2.colors.active,
  },
});

export default CarList;
