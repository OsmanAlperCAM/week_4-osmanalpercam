import React, {useState, useEffect, useRef} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import useFetch from '../../hooks/useFetch/';
import routes from '../../navigation/routes';
import Loading from '../../Components/Loading';
import CenterText from '../../Components/CenterText';
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
    return <CenterText text="Oops!!!{'\n'}Something went wrong" />;
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
