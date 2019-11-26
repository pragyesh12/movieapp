import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../config/color';
import {BASE_IMG} from '../utils/api';
function MovieCard({onPress, info}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.img}>
        <Image
          source={{
            uri: `${BASE_IMG}/w185/${info.poster_path}`,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.discrip}>
        <Text styles={styles.textdis}>{info.original_title}</Text>
      </View>
    </TouchableOpacity>
  );
}

MovieCard.propTypes = {
  onPress: PropTypes.func,
};
const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 200,
    elevation: 3,
    borderRadius: 5,
    margin: 10,
    marginRight: 5,
  },

  img: {
    flex: 0.8,
  },
  discrip: {
    flex: 0.2,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
  },
  textdis: {
    textAlign: 'center',
  },
});
export default MovieCard;
