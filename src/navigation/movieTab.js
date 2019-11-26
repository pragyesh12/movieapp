import {
  createTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import Trailer from '../container/trailer';
import Casts from '../container/casts';
import Info from '../container/info';

const MovieTab = createMaterialTopTabNavigator(
  {
    Info: {
      screen: Info,
    },
    Cast: {
      screen: Casts,
    },
    Trailer: {
      screen: Trailer,
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#333',
      },
      indicatorStyle: {
        backgroundColor: 'red',
      },
    },
  },
);
export default MovieTab;
