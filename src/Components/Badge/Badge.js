import React from 'react';
import {View, Text} from 'react-native';
import styles from './Badge.style';

const Badge = ({ genre}) => {
  return (
    <View key={Math.random()} style={styles.container}>
      <Text style={styles.name}>{genre}</Text>
    </View>
  );
};
export default Badge;
