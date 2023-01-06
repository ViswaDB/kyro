import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {strings} from '../../constant';
import {baseStyle, colors} from '../../constant/theme';
import styles from './styles';

const InputComponent = ({
  value,
  header,
  onChangeText,
  pressable = false,
  onPress,
  placeholder=''
}) => {
  return (
    <TouchableOpacity
      activeOpacity={pressable ? 0.5 : 1}
      onPress={onPress}
      style={styles.container}>
      <Text
        style={baseStyle.txtStylePoppinsSemiBold(
          0.04,
          colors.primary,
          strings.uppercase,
        )}>
        {header}
      </Text>
      {!pressable ? (
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.gray}
        />

      ) : (
        <View style={styles.box}>
          <Text
            style={baseStyle.txtStylePoppinsSemiBold(0.035, colors.secondary)}>
            {value}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default InputComponent;
