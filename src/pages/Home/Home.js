import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import routes from '../../navigation/routes';
import useFetch from '../../hooks/useFetch/';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import iconSize from '../../styles/iconSize';
import colors from '../../styles/colors';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import Layout from './Layout';

const Home = () => {
  const navigation = useNavigation();
  const [movieData, setMovieData] = useState([]);
  const {loading, error, data} = useFetch('movies');
  const {
    loading: genresLoading,
    error: genresError,
    data: genresData,
  } = useFetch('genres');
  const [genreSelectMenuVisible, setGenreSelectMenuVisible] = useState(false);

  useEffect(() => {
    setMovieData(data);
    navigation.setOptions({
      headerRight: () => {
        return (
          <Icon
            name="widgets"
            size={iconSize.normal}
            color={colors.secondary}
            onPress={onOpenGenresMenu}
          />
        );
      },
    });
  }, [data]);

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

  const getGenreFromGenreSelectButton = genre => {
    if (genre === 'ALL Genres') {
      setMovieData(data);
      onCloseGenresMenu();
      return;
    }
    genreFiltering(data, genre);
    onCloseGenresMenu();
  };

  if (loading || genresLoading) {
    return <Loading />;
  }
  if (error || genresError) {
    return <Error />;
  }

  return (
    <Layout
      movieData={movieData}
      genresData={genresData}
      selectedGenre={getGenreFromGenreSelectButton}
      genreSelectMenuVisible={genreSelectMenuVisible}
      onMovieCardPress={onMovieCardPress}
      onCloseGenresMenu={onCloseGenresMenu}
      onOpenGenresMenu={onOpenGenresMenu}
    />
  );
};
export default Home;
