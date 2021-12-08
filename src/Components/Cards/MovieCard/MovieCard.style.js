import {StyleSheet} from 'react-native';
import radius from '../../../styles/radius';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: spacing.tiny,
    flexDirection: 'row',
    padding: spacing.tiny,
    backgroundColor: '#ececec',
    borderRadius: radius.soft,
  },
  
  image: {
    width: 75,
    height:100,
    resizeMode:'contain',
    backgroundColor: '#c61908',
    alignSelf: 'center',
  },
  body_container: {
    flex: 1,
    marginLeft: spacing.tiny,
    justifyContent: 'center',
  },
  
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  brief: {
    fontSize: 15,
  },
  rate: {
    fontWeight: 'bold',
  },
  genre: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
