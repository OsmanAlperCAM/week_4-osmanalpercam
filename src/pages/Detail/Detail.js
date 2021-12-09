import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, Modal, FlatList, ScrollView} from 'react-native';
import Button from '../../Components/Button';
import useFetch from '../../hooks/useFetch/';
import SimilarContentCard from '../../Components/Cards/SimilarContentCard';
import DetailCard from '../../Components/Cards/DetailCard';
import styles from './Detail.style';
import CommentCard from '../../Components/Cards/CommentCard';
import Input from '../../Components/Input';

const Detail = () => {
  const route = useRoute();
  const {movie} = route.params;

  const [commentsData, setCommentsData] = useState(null);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [similarContentData, setSimilarContentData] = useState([]);
  const {
    loading,
    error,
    data: initialCommentData,
  } = useFetch(`comments?movieId=${movie.id}`);

  const {data: filteredSimilarContent} = useFetch(
    `movies?genre=${movie.genre.join('&genre=')}`,
  );

  useEffect(() => {
    if (initialCommentData != null) {
      setCommentsData(initialCommentData);
    }
    if (filteredSimilarContent != null) {
      setSimilarContentData(filteredSimilarContent);
    }
  }, [initialCommentData, filteredSimilarContent]);

  const renderComment = ({item, index}) => {
    console.log(index);
    return <CommentCard comment={item.comment} index={index} />;
  };

  const onCloseComment = () => {
    setCommentsVisible(false);
  };

  const onShowComment = () => {
    setCommentsVisible(true);
    console.log(similarContentData);
  };
  const getTextFromInput = text => {
    setCommentsData([
      ...commentsData,
      {
        id: Math.random(),
        movieId: movie.id,
        comment: text,
      },
    ]);
  };
  const renderSimilarContentCard = (item, index) => {
    return (
      <SimilarContentCard
      key={Math.random()}
        name={item.name}
        rate={item.rate}
        genre={item.genre}
        index={index}
        id={item.id}
      />
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={commentsVisible}
          onRequestClose={onCloseComment}>
          <View style={styles.modal_container}>
            <FlatList data={commentsData} renderItem={renderComment} />
            <Input
              sendText={getTextFromInput}
              placeholder={'Add a Comment...'}
            />
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
        <ScrollView horizontal>
          {similarContentData.map((item, index) => {
            return renderSimilarContentCard(item, index);
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};
export default Detail;
