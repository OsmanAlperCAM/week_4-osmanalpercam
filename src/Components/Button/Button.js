import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Button.style';

const Button = ({label, onButtonPress}) => {
  return (
    <TouchableOpacity onPress={onButtonPress}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Button;
