import React from 'react';
import {View, Text} from 'react-native';
import styles from './CenterText.style';

const Error = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
export default Error;
