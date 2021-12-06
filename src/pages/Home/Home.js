import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
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

const Home = props => {
  const navigation = useNavigation();

  const handleDetailPage = (item) => {
    navigation.navigate(routes.DETAIL_PAGE,{movie:item});
  };
  const renderMovies = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Button title="Go DetailPage" onPress={()=> handleDetailPage(item)} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderMovies} />
      
    </View>
  );
};
export default Home;
