import React, {useState, useEffect, useRef} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {View, Modal, FlatList, ScrollView} from 'react-native';
import Button from '../../Components/Button';
import useFetch from '../../hooks/useFetch/';
import SimilarContentCard from '../../Components/Cards/SimilarContentCard';
import DetailCard from '../../Components/Cards/DetailCard';
import styles from './Detail.style';
import CommentCard from '../../Components/Cards/CommentCard';
import Input from '../../Components/Input';
import routes from '../../navigation/routes';
import ModalHeader from '../../Components/ModalHeader';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';

const Detail = () => {
  const route = useRoute();
  const {movie} = route.params;
  const navigation = useNavigation();

  const scrollRef = useRef();

  const [commentsData, setCommentsData] = useState(null);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [similarContentData, setSimilarContentData] = useState([]);
  const {
    loading,
    error,
    data: initialCommentData,
  } = useFetch(`comments?movieId=${movie.id}`);

  const {data: filteredSimilarContent} = useFetch(
    `movies?genre_like=${movie.genre.join('&genre_like=')}`,
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
  const onSimilarContentCardPress = movie => {
    navigation.navigate(routes.DETAIL_PAGE, {movie});
    scrollRef.current?.scrollTo({x: 0, y: 0, animated: true});
  };
  const renderSimilarContentCard = item => {
    return (
      <SimilarContentCard
        key={Math.random()}
        movie={item}
        onPress={onSimilarContentCardPress}
      />
    );
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <ScrollView ref={scrollRef}>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={commentsVisible}
          onRequestClose={onCloseComment}>
          <View style={styles.modal_container}>
            <ModalHeader onPress={onCloseComment} />
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
          {similarContentData.slice(-4).map((item, index) => {
            return renderSimilarContentCard(item, index);
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};
export default Detail;
