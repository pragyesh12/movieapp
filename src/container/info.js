import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
function Info(props) {
  const {details} = useSelector(state => state.movieReducer);
  return (
    <View style={styles.container}>
      <View style={styles.overview}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Overview
        </Text>
      </View>
      <View style={styles.discription}>
        <Text style={{color: 'white'}} numberOfLines={10}>
          {details.overview}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overview: {
    height: 30,
    padding: 10,
  },
  discription: {
    padding: 10,
    height: 100,
  },
});
Info.propTypes = {};

export default Info;
