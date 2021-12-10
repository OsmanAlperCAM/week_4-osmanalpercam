import React from 'react';
import {View, Text} from 'react-native';
import styles from './RateIcon.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import iconSize from '../../styles/iconSize';

const RateIcon = ({rate}) => {
  return (
    <View style={styles.container}>
      <Icon name="star" size={iconSize.normal} color={'#FFA500'} />
      <Text style={styles.label}>{rate}/10</Text>
    </View>
  );
};
export default RateIcon;
