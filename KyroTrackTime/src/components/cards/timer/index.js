import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {strings} from '../../../constant';
import {baseStyle, colors} from '../../../constant/theme';
import styles from './styles';

const TimerCard = ({time, onChangeText, clicked = false, onFocus, title}) => {
  return (
    <View style={{width: '45%'}}>
      <View
        style={[
          styles.container,
          {
            borderWidth: clicked ? 1 : 0,
            borderColor: clicked ? colors.primary : 'transparent',
            backgroundColor: clicked ? colors.white : colors.backgroundColor,
          },
        ]}>
        <TextInput
          cursorColor={colors.primary}
          value={time}
          onChangeText={onChangeText}
          onFocus={onFocus}
          maxLength={2}
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>
      <Text
        style={[
          baseStyle.txtStylePoppinsRegular(0.03, colors.secondary),
          baseStyle.marginLeft2px,
        ]}>
        {title}
      </Text>

      
    </View>
  );
};

export default TimerCard;
