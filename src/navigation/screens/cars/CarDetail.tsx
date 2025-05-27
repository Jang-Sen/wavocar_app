import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from '@react-navigation/elements';
import { useRoute } from '@react-navigation/native';
import { useCarDetail } from './hooks/useCarDetail';

const CarDetail = () => {
  const { params } = useRoute();

  const { id } = params;

  const { data: car, isLoading, isError } = useCarDetail(id);

  const carImgURI =
    car?.carImgs?.[0] ??
    'https://png.pngtree.com/png-vector/20190628/ourmid/pngtree-empty-box-icon-for-your-project-png-image_1521417.jpg';

  if (isLoading) return <Text>로딩 중...</Text>;
  if (isError) return <Text>에러가 발생했습니다.</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {car?.carImgs && (
        <Image
          source={{ uri: carImgURI }}
          style={styles.carImage}
          resizeMode="cover"
        />
      )}

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>{car?.carName}</Text>
        <Text style={styles.infoDetail}>차량번호: {car?.carNo}</Text>
        <Text style={styles.infoDetail}>연식: {car?.carYear}</Text>
        <Text style={styles.infoDetail}>
          주행거리: {car?.mileage.toLocaleString()} km
        </Text>
        <Text style={styles.infoDetail}>연료: {car?.fuel}</Text>
        <Text style={styles.infoDetail}>배기량: {car?.displacement} cc</Text>
        <Text style={styles.infoDetail}>등급: {car?.grade}</Text>
        <Text style={styles.infoDetail}>변속기: {car?.transmission}</Text>
        <Text style={styles.infoDetail}>
          가격: {car?.price.toLocaleString()} 만원
        </Text>
      </View>

      {car?.carStatus === 'available' ? (
        <TouchableOpacity style={styles.reserveButton}>
          <Text style={styles.reserveText}>예약하기</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.unavailable}>예약 불가</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
  value: {
    fontWeight: '600',
  },
  carImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },

  infoCard: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  infoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  infoDetail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },

  reserveButton: {
    backgroundColor: '#3478f6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  reserveText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  unavailable: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CarDetail;
