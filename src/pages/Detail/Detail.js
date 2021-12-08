import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, Modal, FlatList} from 'react-native';
import Button from '../../Components/Button';
import useFetch from '../../hooks/useFetch/';

import DetailCard from '../../Components/Cards/DetailCard';
import styles from './Detail.style';
import CommentCard from '../../Components/Cards/CommentCard';

const Detail = () => {
  const {loading, error, data: initialCommentData} = useFetch('comments');
  const [commentsData, setCommentsData] = useState(null);
  const [commentsVisible, setCommentsVisible] = useState(false);

  const route = useRoute();
  const {movie} = route.params;

  useEffect(() => {
    if (initialCommentData != null) {
      commentFiltering(initialCommentData, movie.id);
    }
  }, [initialCommentData]);

  const renderComment = ({item, index}) => {
    console.log(index);
    return <CommentCard comment={item.comment} index={index} />;
  };

  const commentFiltering = (data, movieId) => {
    const filteringList = data.filter(item => {
      return item.movieId == movieId;
    });
    setCommentsData(filteringList);
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
        <View style={styles.modal_container}>
          <FlatList data={commentsData} renderItem={renderComment} />
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
