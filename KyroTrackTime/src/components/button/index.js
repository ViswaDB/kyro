import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from './styles';

import Spacer from '../spacer';

import {colors} from '../../constant/theme';

export default function Button(props) {
  const {
    onPress,
    text,
    icon,
    spaceBetween,
    height,
    width = 'auto',
    borderRadius = wp('1%'),
    textWeight = 'bold',
    textColor = colors.white,
    textSize = hp('1.8%'),
    backgroundColor = colors.secondaryLight,
    alignSelf,
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.blueButton,
        {
          width: width,
          borderRadius: borderRadius,
          backgroundColor: backgroundColor,
          alignSelf: alignSelf,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.65}>
      {Boolean(icon) && (
        <>
          <Image source={icon} style={styles.icon} />
          <Spacer width={spaceBetween} />
        </>
      )}
      {Boolean(text) && (
        <Text
          style={{
            fontSize: 14,
            color: textColor,
            fontFamily:'Poppins-Medium'
          }}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}
