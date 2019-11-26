import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../config/color';
import {fontSize} from '../config/fontsize';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import MovieTab from '../navigation/movieTab';
import {connect} from 'react-redux';
import {movieDetailsRequest} from '../action/action';
import {BASE_IMG} from '../utils/api';
class MovieDetails extends React.Component {
  static router = MovieTab.router;
  routeBack() {
    this.props.navigation.goBack();
  }
  componentDidMount() {
    this.props.movieDetails(
      JSON.stringify(this.props.navigation.getParam('id')),
    );
  }
  render() {
    if (this.props.loading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator style={styles.loader} color="red" size="large" />
        </View>
      );
    }
    const {details} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.screenView}>
          <View style={styles.back}>
            <TouchableOpacity onPress={() => this.routeBack()}>
              <Icon1 name="ios-arrow-round-back" color="#fff" size={40} />
            </TouchableOpacity>
          </View>
          <ImageBackground
            source={{
              uri: `${BASE_IMG}/w780/${details.backdrop_path ||
                details.poster_path}`,
            }}
            style={{height: 200}}>
            <View style={styles.details}>
              <View>
                <Image
                  resizeMode="contain"
                  source={{
                    uri: `${BASE_IMG}/w185/${details.poster_path}`,
                  }}
                  style={styles.img}
                />
              </View>
              <View style={styles.moiveText}>
                <Text style={styles.moviename}>{details.original_title}</Text>
                <Text style={styles.movieDis} numberOfLines={3}>
                  {details.overview}
                </Text>
                <Text style={styles.movietype}>Action and drama</Text>
                <View style={styles.star}>
                  <Icon name="star" color="yellow" size={10} />
                  <Text style={styles.stars}>5</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.tabView}>
          <MovieTab navigation={this.props.navigation} details={details} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  loader: {
    position: 'absolute',
    top: 280,
    left: 190,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  screenView: {
    flex: 6,
  },
  tabView: {
    flex: 4,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    width: '60%',
    marginTop: 150,
  },
  img: {
    height: 170,
    width: 150,
    borderRadius: 5,
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  moiveText: {
    marginTop: 60,
  },
  moviename: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  movieDis: {
    color: colors.white,
    fontSize: fontSize.normal,
    marginBottom: 3,
  },
  movietype: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 6,
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
  back: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
});

MovieDetails.propTypes = {};
const mapStateToProps = state => {
  console.log('state', state);
  return {
    loading: state.movieReducer.loading,
    details: state.movieReducer.details,
  };
};
const mapDisptchToProps = dispatch => ({
  movieDetails: id => dispatch(movieDetailsRequest(id)),
});
export default connect(
  mapStateToProps,
  mapDisptchToProps,
)(MovieDetails);
