import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    padding: spacing.tiny,
    borderRadius: radius.smooth,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  input_container: {
    flex: 1,
    padding: spacing.tiny,
    margin: spacing.tiny,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.primaryTextColor,
    padding: 0,
    color: colors.primaryTextColor,
    
  },
});
