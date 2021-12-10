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

  const commentScrollRef = useRef();

  const [commentsData, setCommentsData] = useState(null);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [similarContentData, setSimilarContentData] = useState([]);
  const {
    loading,
    error,
    data: initialCommentData,
  } = useFetch(`comments?movieId=${movie.id}`);

  const {
    loading: similarDataLoading,
    error: similarDataError,
    data: filteredSimilarContent,
  } = useFetch(`movies?genre_like=${movie.genre.join('&genre_like=')}`);

  useEffect(() => {
    if (initialCommentData != null) {
      setCommentsData(initialCommentData);
    }
    if (filteredSimilarContent != null) {
      setSimilarContentData(filteredSimilarContent);
    }
  }, [initialCommentData, filteredSimilarContent]);

  useEffect(() => {
    if (commentScrollRef.current !== undefined) {
      commentScrollRef.current.scrollToEnd();
    }
  }, [commentsData]);

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

  // Fisher–Yates shuffle algoritması
  const handleShuffle = data => {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temporaryItem = data[i];
      data[i] = data[j];
      data[j] = temporaryItem;
    }
    return data;
  };

  if (loading || similarDataLoading) {
    return <Loading />;
  }
  if (error || similarDataError) {
    return <CenterText text={'Oops!!!\nSomething went wrong'} />;
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
      similarContentData={handleShuffle(similarContentData)}
      commentScrollRef={commentScrollRef}
    />
  );
};
export default Detail;
