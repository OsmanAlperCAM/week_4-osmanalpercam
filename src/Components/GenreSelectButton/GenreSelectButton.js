import React from 'react';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import styles from './GenreSelectButton.style';

const GenreSelectButton = ({genre,onSendGenre}) => {

  return (
    <TouchableOpacity onPress={()=> onSendGenre(genre)}>
      <View style={styles.container}>
        <Text style={styles.label}>{genre}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default GenreSelectButton;
