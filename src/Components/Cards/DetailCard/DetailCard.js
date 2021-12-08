import React from 'react';
import {View, Text, Image} from 'react-native';
import GenreBadge from '../../Badges/GenreBadge';
import RateIcon from '../../RateIcon';
import styles from './DetailCard.style';

const DetailCard = ({id, name, rate, genre, director, brief, cast}) => {
  const renderGenre = (item, index) => {
    return <GenreBadge key={`${item}+${id}+${index}`} genre={item} id={id} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.name}>{name}</Text>
        <RateIcon rate={rate} />
      </View>
      <Image style={styles.image} />
      <View style={styles.row_container}>
        <Text style={styles.brief}>Genre:</Text>
        {genre.map((item, index) => {
          return renderGenre(item, index);
        })}
      </View>
      <Text style={styles.brief}>{brief}</Text>
      <View style={styles.row_container}>
        <Text style={styles.brief}>Director: </Text>
        <GenreBadge genre={director} />
      </View>
      <View style={styles.row_container}>
        <Text style={styles.brief}>Cast:</Text>
        {cast.map((item, index) => {
          return renderGenre(item, index);
        })}
      </View>
    </View>
  );
};
export default DetailCard;
