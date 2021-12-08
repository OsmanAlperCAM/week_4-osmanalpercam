import { StyleSheet } from 'react-native';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
    container:{
        justifyContent: 'center',
        flexDirection: 'row',
        flex:1,
        backgroundColor: '#FFA500',
        margin: spacing.tiny,
        padding: spacing.tiny,
        borderRadius: radius.soft,
    },
    label: {
        fontSize:20,
        color: 'white',
        fontWeight:'bold',
        textAlign: 'center'
    }
});