import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';
import fontSize from '../../../styles/fontSize';
import spacing from '../../../styles/spacing';

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    padding: spacing.tiny,
    margin: spacing.tiny,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceSize.width / 2,
  },
  image: {
    width: deviceSize.width / 2,
    height: 100,
    backgroundColor: colors.primaryLight,
  },
  text_container: {
    flexDirection: 'row',
    padding: spacing.tiny,
  },
  text: {
    fontWeight: 'bold',
    color: colors.primaryTextColor,
    fontSize: fontSize.large,
  },
  genre_container: {
    flexDirection: 'row',
  },
});
