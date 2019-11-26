import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../config/color';
import {fontSize} from '../config/fontsize';
import Icon from 'react-native-vector-icons/AntDesign';
import {BASE_IMG} from '../utils/api';
function SwiperCard({onDetailPress, info}) {
  return (
    <ImageBackground
      source={{
        uri: `${BASE_IMG}/w780/${info.backdrop_path || info.poster_path}`,
      }}
      style={styles.container}
      showsButtons={true}>
      <View style={styles.overLayView}>
        <View style={styles.imgView}>
          <Image
            source={{
              uri: `${BASE_IMG}/w185/${info.poster_path}`,
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.boldText}>{info.original_title}</Text>
          <Text style={styles.types}>Action</Text>
          <View style={styles.star}>
            <Icon name="star" color="yellow" size={10} />
            <Text style={styles.stars}>5</Text>
          </View>
          <Text style={styles.discription} numberOfLines={5}>
            {info.overview}
          </Text>
          <TouchableOpacity style={styles.button} onPress={onDetailPress}>
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

SwiperCard.propTypes = {
  onDetailPress: PropTypes.func,
  info: PropTypes.object,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overLayView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  imgView: {
    flex: 1,
    marginLeft: 10,
  },
  textView: {
    flex: 2,
  },
  img: {
    height: 170,
    width: 110,
    borderRadius: 5,
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  boldText: {
    color: 'white',
    fontSize: 25,
  },
  types: {
    color: 'white',
    fontSize: 15,
  },
  star: {
    flexDirection: 'row',
    width: 15,
    alignItems: 'center',
  },
  stars: {
    color: 'white',
    fontSize: 15,
    marginLeft: 4,
  },
  discription: {
    color: 'white',
    fontSize: 13,
  },
  button: {
    backgroundColor: colors.red,
    width: 110,
    height: 35,
    marginTop: 5,
    borderRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.normal,
    textAlign: 'center',
  },
});
export default SwiperCard;
