import React from 'react';
import {View, Modal, FlatList, ScrollView} from 'react-native';
import Button from '../../../Components/Button';
import SimilarContentCard from '../../../Components/Cards/SimilarContentCard';
import DetailCard from '../../../Components/Cards/DetailCard';
import styles from './Layout.style';
import CommentCard from '../../../Components/Cards/CommentCard';
import Input from '../../../Components/Input';
import ModalHeader from '../../../Components/ModalHeader';
import CenterText from '../../../Components/CenterText';

const Layout = ({
  onSimilarContentCardPress,
  commentsVisible,
  onCloseComment,
  commentsData,
  getTextFromInput,
  movie,
  onShowComment,
  similarContentData,
}) => {
  const renderComment = ({item, index}) => {
    return <CommentCard comment={item.comment} index={index} />;
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
  return (
    <ScrollView>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={commentsVisible}
          onRequestClose={onCloseComment}>
          <View style={styles.modal_container}>
            <ModalHeader onPress={onCloseComment} />
            {commentsData.length <= 0 ? (
              <CenterText
                text={
                  'No comments were found for this movie\nBe the first to comment'
                }
              />
            ) : (
              <FlatList data={commentsData} renderItem={renderComment} />
            )}
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
export default Layout;
