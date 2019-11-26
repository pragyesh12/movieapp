/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {MyApp} from './navigation/mainNav';
import {Provider} from 'react-redux';
import {store} from './store';
const App = () => (
  <Provider store={store}>
    <MyApp />
  </Provider>
);

export default App;
