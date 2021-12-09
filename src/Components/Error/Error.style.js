import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSize from '../../styles/fontSize';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.homeBackgroundColor,
  },
  text: {
    color: colors.primaryTextColor,
    fontWeight: 'bold',
    fontSize: fontSize.huge,
    textAlign: 'center',
  },
});
