import React from 'react';
import {View,ActivityIndicator} from 'react-native';
import styles from './Loading.style';

const Loading = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large'/>
    </View>
  );
};
export default Loading;

