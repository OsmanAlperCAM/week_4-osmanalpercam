import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontSize from '../../styles/fontSize';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
    container:{
        justifyContent: 'center',
        flexDirection: 'row',
        flex:1,
        backgroundColor: colors.secondary,
        margin: spacing.tiny,
        padding: spacing.tiny,
        borderRadius: radius.soft,
    },
    label: {
        fontSize:fontSize.big,
        color: colors.secondaryTextColor,
        fontWeight:'bold',
        textAlign: 'center'
    }
});