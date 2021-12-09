import React from 'react';
import {View, Text} from 'react-native';
import styles from './ModalHeader.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import iconSize from '../../styles/iconSize';
import colors from '../../styles/colors';

const ModalHeader = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Icon name="arrow-left" size={iconSize.normal} color={colors.primaryTextColor} onPress={onPress} />
    </View>
  );
};
export default ModalHeader;
