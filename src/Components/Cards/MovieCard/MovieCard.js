import React from 'react';
import {View, Text, Image} from 'react-native';
import GenreBadge from '../../Badges/GenreBadge';

import styles from './MovieCard.style';

const MovieCard = ({id, name, brief, genre, rate}) => {
  const renderGenre = (item, index) => {
    return <GenreBadge key={`${item}+${id}+${index}`} genre={item} id={id} />;
  };

  return (
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
      <View style={styles.trailing_container}>
        <Text style={styles.rate}>{rate}/10</Text>
      </View>
    </View>
  );
};
export default MovieCard;
