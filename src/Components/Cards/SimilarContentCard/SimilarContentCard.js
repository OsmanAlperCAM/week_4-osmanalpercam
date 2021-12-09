import React from 'react';
import {View, Text, Image} from 'react-native';
import GenreBadge from '../../Badges/GenreBadge';
import RateIcon from '../../RateIcon';
import styles from './SimilarContentCard.style';

const SimilarContentCard = ({name, rate, genre,index,id}) => {
  return (
    <View key={`${name}-${id}+${index} `} style={styles.container}>
      <Image style={styles.image} />
      <View style={styles.text_container}>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text}>{name}</Text>
      </View>
      <Text style={styles.genre}>{genre}</Text>
      <RateIcon rate={rate} />
    </View>
  );
};
export default SimilarContentCard;
