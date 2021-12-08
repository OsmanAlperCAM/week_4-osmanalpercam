import React, {useState,useEffect} from 'react';
import {View, Text, FlatList, Button, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import routes from '../../navigation/routes';
import useFetch from '../../hooks/useFetch/';
import styles from './Home.style';

const Home = props => {
  const [movieData, setMovieData] = useState([]);
  const {loading, error, data} = useFetch('movies');
  const {data: genresData} = useFetch('genres');

  useEffect(() => {
    setMovieData(data);
  }, [data]);

  const [genreSelectMenuVisible, setGenreSelectMenuVisible] = useState(false);
  const navigation = useNavigation();

  const onOpenGenresMenu = () => {
    setGenreSelectMenuVisible(true);
  };
  const onCloseGenresMenu = () => {
    setGenreSelectMenuVisible(false);
  };
  const handleDetailPage = item => {
    navigation.navigate(routes.DETAIL_PAGE, {movie: item});
  };

  const genreFiltering = (data, genre) => {
    const filteringList = data.filter(item => {
      return item.genre.indexOf(genre.toUpperCase()) > -1;
    });
    setMovieData(filteringList);
  };

  const renderMovies = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Button title="Go DetailPage" onPress={() => handleDetailPage(item)} />
      </View>
    );
  };
  const renderGenres = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Genre Select" onPress={onOpenGenresMenu} />
      <Modal
        animationType="slide"
        visible={genreSelectMenuVisible}
        onRequestClose={onCloseGenresMenu}>
        <View>
          <FlatList data={genresData} renderItem={renderGenres} />
        </View>
      </Modal>
      <FlatList data={movieData} renderItem={renderMovies} />
    </View>
  );
};
export default Home;
