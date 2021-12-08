import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Button, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import routes from '../../navigation/routes';
import useFetch from '../../hooks/useFetch/';
import styles from './Home.style';
import MovieCard from '../../Components/Cards/MovieCard';
import GenreSelectButton from '../../Components/GenreSelectButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const {loading, error, data} = useFetch('movies');
  const {data: genresData} = useFetch('genres');

  useEffect(() => {
    setMovieData(data);
  }, [data]);

  const [genreSelectMenuVisible, setGenreSelectMenuVisible] = useState(false);
  const navigation = useNavigation();

  navigation.setOptions({
    headerRight: () => {
      return (
        <Icon
          name="widgets"
          size={30}
          color={'#FFA500'}
          onPress={onOpenGenresMenu}
        />
      );
    },
  });

  const onOpenGenresMenu = () => {
    setGenreSelectMenuVisible(true);
  };
  const onCloseGenresMenu = () => {
    setGenreSelectMenuVisible(false);
  };

  const genreFiltering = (data, genre) => {
    const filteringList = data.filter(item => {
      return item.genre.indexOf(genre.toUpperCase()) > -1;
    });
    setMovieData(filteringList);
  };
  const onMovieCardPress = item => {
    navigation.navigate(routes.DETAIL_PAGE, {movie: item});
  };

  const renderMovies = ({item}) => {
    return (
      <MovieCard
        id={item.id}
        name={item.name}
        brief={item.brief}
        rate={item.rate}
        genre={[...item.genre]}
        onMovieCardPress={() => onMovieCardPress(item)}
      />
    );
  };

  const getGenreFromGenreSelectButton = genre => {
    if (genre === 'ALL MOVIES') {
      setMovieData(data);
      onCloseGenresMenu();
      return;
    }
    genreFiltering(data, genre);
    onCloseGenresMenu();
  };

  const genresMenuHeader = () => {
    return (
      <GenreSelectButton
        genre={'ALL MOVIES'}
        onSendGenre={getGenreFromGenreSelectButton}
      />
    );
  };
  const renderGenres = ({item}) => {
    return (
      <GenreSelectButton
        genre={item.name}
        onSendGenre={getGenreFromGenreSelectButton}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={genreSelectMenuVisible}
        onRequestClose={onCloseGenresMenu}>
        <View>
          <FlatList
            data={genresData}
            renderItem={renderGenres}
            ListHeaderComponent={genresMenuHeader}
          />
        </View>
      </Modal>
      <FlatList data={movieData} renderItem={renderMovies} />
    </View>
  );
};
export default Home;
