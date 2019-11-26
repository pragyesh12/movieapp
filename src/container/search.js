import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import CardThree from '../components/searchCard';
import {useDispatch, useSelector} from 'react-redux';
import {movieSearchRequest} from '../action/action';
function Search(props) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleSearch = t => {
    setText(t);
    dispatch(movieSearchRequest(t));
  };
  const dataSource = useSelector(state => state.movieReducer.searchResults);
  const loading = useSelector(state => state.movieReducer.loading);
  return (
    <View style={styles.container}>
      <View style={styles.textSearch}>
        <TextInput
          onChangeText={t => handleSearch(t)}
          value={text}
          style={styles.inputSearch}
        />
      </View>
      <View style={styles.results}>
        {!loading || text ? (
          <FlatList
            data={dataSource}
            renderItem={({item}) => (
              <CardThree info={item} viewMovie={() => alert('i')} />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.seperator} />}
          />
        ) : (
          <View style={styles.loaderContainer}>
            <ActivityIndicator style={styles.loader} color="red" size="large" />
          </View>
        )}
      </View>
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
    top: 180,
    left: 190,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  textSearch: {
    height: 40,
    marginTop: 4,
  },
  inputSearch: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 4,
    elevation: 5,
    fontSize: 20,
    padding: 5,
  },
  seperator: {
    marginTop: 10,
    backgroundColor: '#8E8E8E',
  },
  results: {
    height: 'auto',
  },
});
Search.propTypes = {};

export default Search;
