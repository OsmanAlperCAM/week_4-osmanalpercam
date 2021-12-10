import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Badge from '../../Badge';
import RateIcon from '../../RateIcon';

import styles from './MovieCard.style';

const MovieCard = ({id, name, brief, genre, rate, onMovieCardPress}) => {
  const renderGenre = (item, index) => {
    return <Badge key={Math.random()} genre={item} id={id} />;
  };

  return (
    <TouchableWithoutFeedback onPress={onMovieCardPress}>
      <View style={styles.container}>
        <Image style={styles.image} />
        <View style={styles.body_container}>
          <Text style={styles.name}>{name}</Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.brief}>
            {brief}
          </Text>
          <View style={styles.genre}>
            {genre.map((item, index) => {
              return renderGenre(item, index);
            })}
          </View>
        </View>
        <RateIcon rate={rate} />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default MovieCard;
