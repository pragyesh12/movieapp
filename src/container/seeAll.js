import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CardThree from '../components/searchCard';
import {movieListRequest} from '../action/action';
function SeeAll(props) {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieListRequest(1));
  }, [dispatch]);
  const handleInfiniteList = () => {
    setPage(page + 1);
    dispatch(movieListRequest(page));
  };
  const dataSource = useSelector(state => state.movieReducer.list);
  const loading = useSelector(state => state.movieReducer.loading);
  if (loading) {
    <View style={styles.loaderContainer}>
      <ActivityIndicator style={styles.loader} color="red" size="large" />
    </View>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={({item}) => (
          <CardThree info={item} viewMovie={() => alert('i')} />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        onEndReached={() => handleInfiniteList()}
        onEndReachedThreshold={20}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  seperator: {
    marginTop: 10,
  },
  container: {
    backgroundColor: 'black',
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  loader: {
    position: 'absolute',
    top: 280,
    left: 190,
  },
});
SeeAll.propTypes = {};

export default SeeAll;
