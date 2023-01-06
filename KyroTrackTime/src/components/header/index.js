import React from 'react';
import {View, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {strings} from '../../constant';
import {baseStyle, colors} from '../../constant/theme';
import EntypoIcons from 'react-native-vector-icons/Entypo';

const Header = ({onPress, showPlus = false}) => {
    const plusIcon = (
        <EntypoIcons name="circle-with-plus" size={30} color={colors.primary} />
      );
  return (
    <View style={baseStyle.tabHeader}>
      <Text style={baseStyle.txtStylePoppinsSemiBold(0.07, colors.primary)}>
        {strings.tasks}
      </Text>
      {showPlus && (
        <Ripple onPress={onPress} style={baseStyle.alignSelfCenter}>
          {plusIcon}
        </Ripple>
      )}
    </View>
  );
};

export default Header;
