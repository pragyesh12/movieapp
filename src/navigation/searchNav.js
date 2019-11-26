import {createStackNavigator} from 'react-navigation-stack';
import Search from '../container/search';
import {TouchableOpacity} from 'react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import React from 'react';
export const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: ({navigation}) => ({
      title: 'Search',
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: 'black',
      },
      headerLeft: () => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{marginLeft: 6}}>
            <Icon1 name="md-arrow-round-back" color="#fff" size={25} />
          </TouchableOpacity>
        );
      },
    }),
  },
});
