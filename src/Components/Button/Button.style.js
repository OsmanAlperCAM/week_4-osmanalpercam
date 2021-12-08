import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSize from '../../styles/fontSize';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    padding: spacing.tiny,
    justifyContent: 'center'
  },
  label: {
    fontSize: fontSize.big,
    color: colors.secondaryTextColor,
    fontWeight: 'bold',
  },
});
