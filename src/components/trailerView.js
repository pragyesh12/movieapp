import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Image} from 'react-native';

function TrailerView(props) {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={{
            uri:
              'https://sm.mashable.com/t/mashable_in/photo/default/saaho-isnt-just-a-bad-movie-turns-out-its-a-copy_rpjy.910.jpg',
          }}
          style={{width: 100, height: 100}}
        />
      </View>
      <View style={styles.dis}>
        <Text>Discription</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  img: {},
});
TrailerView.propTypes = {};

export default TrailerView;
