import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { NotFound } from './screens/NotFound';
import { AntDesign } from '@expo/vector-icons';
import MyInfo from './screens/MyInfo';
import CarDetail from './screens/cars/CarDetail';
import CarList from './screens/cars/CarList';
import { Image } from 'react-native';
import car from '../assets/Car-2--Streamline-Core.png';

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: CarList,
      options: {
        title: 'WAVOCAR',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          // <FontAwesome5 name="car" size={24} color={color} />
          <Image
            source={car}
            // tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    // Updates: {
    //   screen: Updates,
    //   options: {
    //     tabBarIcon: ({ color, size }) => (
    //       <Image
    //         source={bell}
    //         tintColor={color}
    //         style={{
    //           width: size,
    //           height: size,
    //         }}
    //       />
    //     ),
    //   },
    // },
    Profile: {
      screen: MyInfo,
      options: {
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={size} color={color} />
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
      linking: {
        path: ':user(@[a-zA-Z0-9-_]+)',
        parse: {
          user: (value) => value.replace(/^@/, ''),
        },
        stringify: {
          user: (value) => `@${value}`,
        },
      },
    },
    CarList: {
      screen: CarList,
      linking: {
        path: 'cars',
        // parse: {
        //   id: (value) => parseInt(value, 10),
        // },
        // stringify: {
        //   id: (value) => value.toString(),
        // },
      },
    },
    CarDetail: {
      screen: CarDetail,
      linking: {
        path: 'cars/:id',
        parse: {
          id: (value) => value,
        },
        stringify: {
          id: (value) => value,
        },
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
