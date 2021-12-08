import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Modal, Pressable, FlatList} from 'react-native';
import Button from '../../Components/Button';
import DetailCard from '../../Components/Cards/DetailCard';
import styles from './Detail.style';

const Detail = () => {
  const [commentsVisible, setCommentsVisible] = useState(false);

  const route = useRoute();
  const {movie} = route.params;
  console.log(movie.name);

  const renderComment = ({item}) => {
    return (
      <View>
        <Text>{item.comment}</Text>
      </View>
    );
  };

  const onCloseComment = () => {
    setCommentsVisible(false);
  };

  const onShowComment = () => {
    setCommentsVisible(true);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={commentsVisible}
        onRequestClose={onCloseComment}>
        <View>
          {/* <FlatList data={data} renderItem={renderComment} /> */}
          <Text>Input ve Gonder Butonu</Text>
        </View>
      </Modal>
      <DetailCard
        id={movie.id}
        name={movie.name}
        rate={movie.rate}
        genre={movie.genre}
        director={movie.director}
        brief={movie.brief}
        cast={movie.cast}
      />
      <Button label="Show Comments" onButtonPress={onShowComment} />
    </View>
  );
};
export default Detail;
