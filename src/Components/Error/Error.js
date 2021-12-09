import React from 'react';
import {View, Text} from 'react-native';
import styles from './Error.style';

const Error = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oops!!!{'\n'}Something went wrong</Text>
    </View>
  );
};
export default Error;
