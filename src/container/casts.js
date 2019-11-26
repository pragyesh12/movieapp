import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import MovieCast from '../components/movieCast';
import {useSelector} from 'react-redux';
function Casts(props) {
  const data = [1, 2, 3, 4, 54, 5, 65, 6, 7];
  const {details} = useSelector(state => state.movieReducer);
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={({item}) => <MovieCast />} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
Casts.propTypes = {};

export default Casts;
