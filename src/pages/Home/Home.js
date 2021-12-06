import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import routes from '../../navigation/routes';
import styles from './Home.style';

const Home = props => {
  const navigation = useNavigation();

  const handleDetailPage = () => {
    navigation.navigate(routes.DETAIL_PAGE);
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Go DetailPage" onPress={handleDetailPage} />
    </View>
  );
};
export default Home;
