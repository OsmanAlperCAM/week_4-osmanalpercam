import React, {useState, useRef} from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import iconSize from '../../styles/iconSize';
import colors from '../../styles/colors';

const Input = ({sendText, ...props}) => {
  const [text, setText] = useState('');

  const inputRef = useRef();
  
  const onSendPress = () => {
    sendText(text);
    inputRef.current.clear();
  };

  return (
    <View style={styles.container}>
      <Icon
        name="face"
        size={iconSize.normal}
        color={colors.primaryTextColor}
      />
      <View style={styles.input_container}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          onChangeText={setText}
          {...props}
        />
      </View>
      <Icon
        name="send"
        size={iconSize.normal}
        color={colors.primaryTextColor}
        onPress={onSendPress}
      />
    </View>
  );
};
export default Input;
