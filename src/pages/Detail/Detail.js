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
import Layout from './Layout/';

const Detail = () => {
  const route = useRoute();
  const {movie} = route.params;
  const navigation = useNavigation();

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

  const onCloseComment = () => {
    setCommentsVisible(false);
  };

  const onShowComment = () => {
    setCommentsVisible(true);
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
    navigation.push(routes.DETAIL_PAGE, {movie});
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Layout
      onSimilarContentCardPress={onSimilarContentCardPress}
      commentsVisible={commentsVisible}
      onCloseComment={onCloseComment}
      commentsData={commentsData}
      getTextFromInput={getTextFromInput}
      movie={movie}
      onShowComment={onShowComment}
      similarContentData={similarContentData}
    />
  );
};
export default Detail;
