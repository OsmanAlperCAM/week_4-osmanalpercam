import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSize from '../../../styles/fontSize';
import radius from '../../../styles/radius';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: spacing.tiny,
    flexDirection: 'row',
    padding: spacing.tiny,
    backgroundColor: colors.primary,
    borderRadius: radius.soft,
  },

  image: {
    width: 75,
    height: 100,
    resizeMode: 'contain',
    backgroundColor: colors.primaryLight,
    alignSelf: 'center',
  },
  body_container: {
    flex: 1,
    marginLeft: spacing.tiny,
    justifyContent: 'center',
  },

  name: {
    fontWeight: 'bold',
    fontSize: fontSize.large,
    color: colors.primaryTextColor,
  },
  brief: {
    fontSize: fontSize.normal,
    color: colors.primaryTextColor,
  },
  rate: {
    fontWeight: 'bold',
  },
  genre: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
