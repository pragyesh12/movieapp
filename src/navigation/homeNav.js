import {createStackNavigator} from 'react-navigation-stack';
import Home from '../container/home';
import React from 'react';

import MovieDetails from '../container/movieDetails';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import SeeAll from '../container/seeAll';
export const HomeStack = createStackNavigator({
  Home: {
    screen: Home,

    navigationOptions: ({navigation}) => ({
      title: 'Movie',
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: 'black',
      },
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu" color="#fff" size={40} />
          </TouchableOpacity>
        );
      },
    }),
  },
  MovieDetails: {
    screen: MovieDetails,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SeeAll: {
    screen: SeeAll,
    navigationOptions: () => ({
      header: null,
    }),
  },
});
