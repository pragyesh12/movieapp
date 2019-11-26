import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {HomeStack} from './homeNav';
import {SearchStack} from './searchNav';
const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Search: {
      screen: SearchStack,
    },
  },
  {
    initialRouteName: 'Home',
    drawerBackgroundColor: 'rgba(0,0,0, 0.7)',
    contentOptions: {
      itemsContainerStyle: {
        marginVertical: 200,
      },
      itemStyle: {
        paddingLeft: 60,
      },
      labelStyle: {
        color: '#fff',
        fontSize: 15,
      },
    },
  },
);

export const MyApp = createAppContainer(MyDrawerNavigator);
