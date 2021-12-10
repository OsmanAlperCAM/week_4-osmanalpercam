import React from 'react';
import {View, FlatList, Modal} from 'react-native';
import styles from './Layout.style';
import MovieCard from '../../../Components/Cards/MovieCard';
import GenreSelectButton from '../../../Components/GenreSelectButton';
import ModalHeader from '../../../Components/ModalHeader';

const Layout = ({
  movieData,
  genresData,
  genreSelectMenuVisible,
  selectedGenre,
  onMovieCardPress,
  onCloseGenresMenu,
}) => {
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

  const genresMenuHeader = () => {
    return (
      <GenreSelectButton genre={'ALL Genres'} onSendGenre={selectedGenre} />
    );
  };
  const renderGenres = ({item}) => {
    return <GenreSelectButton genre={item.name} onSendGenre={selectedGenre} />;
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={genreSelectMenuVisible}
        onRequestClose={onCloseGenresMenu}>
        <View style={styles.modal_container}>
          <ModalHeader onPress={onCloseGenresMenu} text="Genres" />
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
export default Layout;
