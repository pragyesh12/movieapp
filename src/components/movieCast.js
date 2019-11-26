import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet} from 'react-native';
function MovieCast(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScDHKT8_cnF_hd8CNt_J6sKKQqmtACEklSYCGrwOSZyA9n54pG2A&s',
          }}
          style={{height: 100, width: 100, borderRadius: 100}}
        />
      </View>
      <View style={styles.about}>
        <Text style={{color: 'white', fontSize: 17}}>Harmie granger</Text>
        <Text style={{color: 'white', fontSize: 15}}>good actor</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgView: {
    flex: 1,
  },
  about: {
    flex: 2,
  },
});
MovieCast.propTypes = {};

export default MovieCast;
