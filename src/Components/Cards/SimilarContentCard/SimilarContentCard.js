import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Badge from '../../Badge';
import RateIcon from '../../RateIcon';
import styles from './SimilarContentCard.style';

const SimilarContentCard = ({movie, onPress}) => {
  const renderGenre = item => {
    return <Badge key={Math.random()} genre={item} />;
  };

  const onPressCard = () => {
    onPress(movie);
  };

  return (
    <Pressable onPress={onPressCard}>
      <View key={Math.random()} style={styles.container}>
        <Image style={styles.image} />
        <View style={styles.text_container}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
            {movie.name}
          </Text>
        </View>
        <View style={styles.genre_container}>
          {movie.genre.map(item => renderGenre(item))}
        </View>
        <RateIcon rate={movie.rate} />
      </View>
    </Pressable>
  );
};
export default SimilarContentCard;
