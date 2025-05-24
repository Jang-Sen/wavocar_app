import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from '@react-navigation/elements';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. 위치 */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>📍 현재 위치: 서울 강남구</Text>
      </View>

      {/* 2. 검색창 */}
      <TouchableOpacity style={styles.searchBox}>
        <Text style={styles.searchPlaceholder}>어떤 차량을 찾고 있나요?</Text>
      </TouchableOpacity>

      {/* 3. 예약 가능한 차량 섹션 */}
      <Text style={styles.sectionTitle}>예약 가능한 차량</Text>
      <FlatList
        horizontal
        // data={availableCars}
        keyExtractor={(item) => item.id}
        // renderItem={({ item }) => <CarCard car={item} />}
        showsHorizontalScrollIndicator={false}
      />

      {/* 4. 배너/이벤트 */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>🚗 WAVOCAR 할인 이벤트 진행 중!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  locationContainer: {
    marginBottom: 12,
  },
  locationText: {
    fontSize: 16,
    color: '#333',
  },
  searchBox: {
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  searchPlaceholder: {
    color: '#888',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  banner: {
    backgroundColor: '#d0ebff',
    padding: 16,
    borderRadius: 8,
    marginTop: 30,
  },
  bannerText: {
    fontSize: 16,
    color: '#1c7ed6',
  },
  // container: {
  //   flex: 1,
  //   paddingTop: StatusBar.currentHeight,
  //   marginHorizontal: 16,
  // },
  // item: {
  //   backgroundColor: '#f9c2ff',
  //   padding: 20,
  //   marginVertical: 8,
  // },
  // header: {
  //   fontSize: 32,
  //   backgroundColor: '#fff',
  // },
  // title: {
  //   fontSize: 24,
  // },
});
