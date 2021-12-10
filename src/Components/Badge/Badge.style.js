import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';
import colors from '../../styles/colors';
import fontSize from '../../styles/fontSize';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: spacing.tiny,
    margin: spacing.tiny,
    borderRadius: radius.soft,
    
  },
  name: {
    color: colors.secondaryTextColor,
    fontSize:fontSize.tiny,
    fontWeight:'bold',
  },
});
