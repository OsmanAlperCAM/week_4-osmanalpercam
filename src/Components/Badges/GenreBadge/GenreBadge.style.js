import {StyleSheet} from 'react-native';
import spacing from '../../../styles/spacing';
import radius from '../../../styles/radius';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFA500',
    padding: spacing.tiny,
    margin: spacing.tiny,
    borderRadius: radius.soft,
    
  },
  name: {
    color: '#FFFFFF',
    fontSize:10
  },
});
