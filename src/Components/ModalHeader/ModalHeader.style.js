import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import fontSize from '../../styles/fontSize';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: spacing.tiny,
    backgroundColor: colors.primaryDark,
    alignItems: 'center',
  },
  text: {
    padding: spacing.tiny,
    marginLeft: spacing.tiny,
    fontSize: fontSize.big,
    fontWeight: 'bold',
    color: colors.primaryTextColor,
  },
});
