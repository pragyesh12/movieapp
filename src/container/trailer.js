import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import TrailerView from '../components/trailerView';
function Trailer(props) {
  return (
    <View>
      <TrailerView />
      <TrailerView />
    </View>
  );
}

Trailer.propTypes = {};

export default Trailer;
