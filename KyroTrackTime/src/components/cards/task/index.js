import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {baseStyle, colors} from '../../../constant/theme';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/AntDesign';

const TaskCard = ({taskTitle, taskTime,onPlayPress,onCardPress}) => {
  const playIcon = <Icon name="play" size={15} color={colors.black} />;

  return (
    <View style={[baseStyle.width100Percentage, baseStyle.alignSelfCenter]}>
      <TouchableOpacity activeOpacity={0.9} onPress={onCardPress} style={styles.container}>
        <Text
          style={[
            baseStyle.txtStylePoppinsRegular(0.035, colors.primary),
            baseStyle.alignSelfCenter,
          ]}>
          {taskTitle}
        </Text>
        <Ripple
          rippleOpacity={0.3}
          rippleColor={colors.primary}
          onPress={onPlayPress}
          style={baseStyle.alignItemsCenter}>
          <Text style={baseStyle.txtStylePoppinsRegular(0.032, colors.black)}>
            {taskTime}
          </Text>
          {playIcon}
        </Ripple>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
