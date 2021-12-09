import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSize from '../../styles/fontSize';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    padding: spacing.tiny,
    margin: spacing.tiny,
    justifyContent: 'center',
    borderRadius: radius.soft,
  },
  label: {
    fontSize: fontSize.big,
    color: colors.secondaryTextColor,
    fontWeight: 'bold',
  },
});
