import {StyleSheet} from 'react-native';
import spacing from '../../../styles/spacing';
import radius from '../../../styles/radius';
import colors from '../../../styles/colors';
import fontSize from '../../../styles/fontSize';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: spacing.tiny,
    margin: spacing.tiny,
    backgroundColor: colors.secondary,
  },
  comment_container: {
    flex: 1,
    marginLeft: spacing.tiny,
    padding: spacing.tiny,
    borderRadius: radius.smooth,
    backgroundColor: colors.secondaryLight,
  },
  comment: {
    fontSize: fontSize.small,
    color: colors.secondaryTextColor,
  },
});
