import React, {useState} from 'react';
import {View, Text, FlatList, Button, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import routes from '../../navigation/routes';
import styles from './Home.style';

const data = [
  {
    id: 'b973a532-5553-11ec-bf63-0242ac130002',
    name: 'Enim Dolor Reprehenderit',
    rate: 9.8,
    genre: ['HORROR', 'THRILLER'],
    director: 'Quis Aliquip',
    brief:
      'Occaecat elit quis officia ea. Culpa nisi cillum in ex est ea exercitation commodo excepteur aute. Non eu aliqua incididunt fugiat esse voluptate occaecat non tempor aliquip et. Amet id exercitation occaecat ad aliqua quis reprehenderit ut excepteur aliqua labore minim in exercitation. Anim elit pariatur anim esse labore mollit sint. Enim magna nulla pariatur magna elit proident irure sunt consectetur voluptate sit incididunt. Incididunt officia veniam cupidatat dolore voluptate sunt culpa dolor esse.',
    cast: ['Mollit Reprehenderit', 'Fugiat Adipisicing', 'Pariatur Nostrud'],
    brief:
      'Eu cillum fugiat do sit commodo laboris deserunt laborum consectetur duis. Ut velit eiusmod deserunt nostrud enim consequat ad nostrud reprehenderit. Elit qui dolore do ullamco deserunt cupidatat deserunt. Dolor sint in occaecat qui sunt.',
  },
  {
    id: 'b973a7d0-5553-11ec-bf63-0242ac130002',
    name: 'Eiusmod Ullamco',
    rate: 9.5,
    genre: ['COMEDY'],
    director: 'Occaecat Sunt Enim',
    brief:
      'Culpa cupidatat reprehenderit anim aute incididunt ea duis. Voluptate ipsum Lorem quis velit. In dolore excepteur voluptate nisi veniam duis deserunt ex officia fugiat ea. Ullamco laborum proident enim sit ea duis. Amet duis duis deserunt dolor officia exercitation. Sunt quis magna duis in. Ipsum velit occaecat ipsum aliqua velit nostrud id ut ex mollit adipisicing consequat ea.',
    cast: ['Tempor Ex Esse', 'Incididunt Aliquip', 'Reprehenderit Deserunt'],
  },
];
const genres = [
  {
    id: 'dba3ca16-55de-11ec-bf63-0242ac130002',
    name: 'ACTION',
  },
  {
    id: 'dba3cc64-55de-11ec-bf63-0242ac130002',
    name: 'COMEDY',
  },
  {
    id: 'dba3cd7c-55de-11ec-bf63-0242ac130002',
    name: 'DRAMA',
  },
  {
    id: 'dba3ce76-55de-11ec-bf63-0242ac130002',
    name: 'FANTASY',
  },
  {
    id: 'dba3cf70-55de-11ec-bf63-0242ac130002',
    name: 'HORROR',
  },
  {
    id: 'dba3d434-55de-11ec-bf63-0242ac130002',
    name: 'ROMANCE',
  },
  {
    id: 'dba3d628-55de-11ec-bf63-0242ac130002',
    name: 'THRILLER',
  },
];

const Home = props => {
  const [movieData, setMovieData] = useState([]);
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
          <FlatList data={genres} renderItem={renderGenres} />
        </View>
      </Modal>
      <FlatList data={data} renderItem={renderMovies} />
    </View>
  );
};
export default Home;
