import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import SwiperCard from '../components/swiperCard';
import {colors} from '../config/color';
import MovieCard from '../components/movieCard';
import {useDispatch} from 'react-redux';
import {popularMovieRequest, nowPlayingRequest} from '../action/action';
import {useSelector} from 'react-redux';
function Home(props) {
  const goToMoviesDetails = id => {
    props.navigation.navigate('MovieDetails', {id: id});
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nowPlayingRequest(10));
  }, [dispatch]);
  useEffect(() => {
    dispatch(popularMovieRequest(10));
  }, [dispatch]);
  const loading = useSelector(state => state.movieReducer.loading);
  const isLoading = useSelector(state => state.movieReducer.isLoading);

  const {popularMovies, nowPlayingMovies} = useSelector(
    state => state.movieReducer,
  );
  if (loading || isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator style={styles.loader} color="red" size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          showsPagination={false}
          autoplay={true}
          autoplayTimeout={2.5}>
          {nowPlayingMovies.map(info => (
            <SwiperCard
              onDetailPress={() => goToMoviesDetails(info.id)}
              key={info.id}
              info={info}
            />
          ))}
        </Swiper>
      </View>
      <View style={styles.scorll}>
        <View style={styles.movingHeading}>
          <Text style={styles.heading}>Popular</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SeeAll')}>
            <Text style={styles.heading}>SeeAll</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollview} horizontal>
          {popularMovies.map(info => (
            <MovieCard
              onPress={() => goToMoviesDetails(info.id)}
              key={info.id}
              info={info}
            />
          ))}
        </ScrollView>
      </View>
      {/* <View style={styles.tab}>
        <Text>3</Text>
      </View> */}
    </View>
  );
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
  swiper: {
    flex: 1,
  },
  scorll: {
    flex: 1,
  },
  movingHeading: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
  },
  heading: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  scrollview: {
    flex: 1,
  },
});
export default Home;
