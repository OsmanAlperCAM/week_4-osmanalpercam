import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './GenreSelectButton.style';

const GenreSelectButton = ({genre, onSendGenre}) => {
  const onPress = () => {
    onSendGenre(genre);
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>{genre}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default GenreSelectButton;
