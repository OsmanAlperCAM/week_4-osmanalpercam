import React from 'react';
import {View, Text} from 'react-native';
import styles from './CommentCard.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import iconSize from '../../../styles/iconSize';
import colors from '../../../styles/colors';

const CommentCard = ({comment, index}) => {
  return (
    <View style={styles.container}>
      <Icon
        name={index % 2 === 0 ? 'face-profile' : 'face-profile-woman'}
        size={iconSize.normal}
        color={colors.secondaryTextColor}
      />
      <View style={styles.comment_container}>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    </View>
  );
};
export default CommentCard;
