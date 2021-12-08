import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import GenreBadge from '../../Badges/GenreBadge';
import RateIcon from '../../RateIcon';

import styles from './MovieCard.style';

const MovieCard = ({id, name, brief, genre, rate, onMovieCardPress}) => {
  const renderGenre = (item, index) => {
    return <GenreBadge key={`${item}+${id}+${index}`} genre={item} id={id} />;
  };

  return (
    <TouchableWithoutFeedback onPress={onMovieCardPress}>
      <View style={styles.container}>
        <Image style={styles.image} />

        <View style={styles.body_container}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.brief}>
            {brief.length > 60 ? brief.substring(0, 60) + '...' : brief}
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
