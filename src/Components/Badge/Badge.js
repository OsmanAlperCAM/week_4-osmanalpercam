import React from 'react';
import {View, Text} from 'react-native';
import styles from './Badge.style';

const Badge = ({id, genre}) => {
  return (
    <View key={id} style={styles.container}>
      <Text style={styles.name}>{genre}</Text>
    </View>
  );
};
export default Badge;
