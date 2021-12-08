import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';
import fontSize from '../../../styles/fontSize';
import spacing from '../../../styles/spacing';

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: spacing.tiny,
  },
  title_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: spacing.tiny,
  },
  row_container: {
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  image: {
    width: deviceSize.width - spacing.tiny * 2,
    height: deviceSize.height / 4,
    backgroundColor: colors.primaryLight,
    resizeMode: 'contain',
  },
  name: {
    fontWeight: 'bold',
    color: colors.primaryTextColor,
    fontSize: fontSize.huge,
  },
  brief: {
    color: colors.primaryTextColor,
    fontSize: fontSize.normal,
    margin: spacing.tiny,
  },
  
  sub_title:{
    color: colors.primaryTextColor,
    fontWeight:'bold',
  }
});
