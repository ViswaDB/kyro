import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Modal from 'react-native-modal';
import {strings} from '../../constant';
import {baseStyle, colors} from '../../constant/theme';
import TimerCard from '../cards/timer';

const TimerModal = ({
  modalVisible,
  onBackdropPress,
  onBackButtonPress,
  children = () => {},
  onCancelPress,
  onOkPress,
}) => {
  return (
    <View>
      <Modal
        onBackButtonPress={onBackButtonPress}
        onBackdropPress={onBackdropPress}
        isVisible={modalVisible}>
        <View style={styles.container}>
          <Text
            style={baseStyle.txtStylePoppinsSemiBold(
              0.03,
              colors.primary,
              strings.uppercase,
            )}>
            {strings.duration}
          </Text>

          <View
            style={[baseStyle.flexDirectionRow, baseStyle.justifyContentSB]}>
            {children()}
          </View>
          <View style={styles.buttonContainer}>
            <Ripple onPress={onCancelPress} style={styles.buttonView}>
              <Text
                style={baseStyle.txtStylePoppinsSemiBold(
                  0.032,
                  colors.primary,
                )}>
                {strings.cancel}
              </Text>
            </Ripple>
            <Ripple onPress={onOkPress} style={styles.buttonView}>
              <Text
                style={[
                  baseStyle.txtStylePoppinsSemiBold(0.032, colors.primary),
                ]}>
                {strings.ok}
              </Text>
            </Ripple>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop:20,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '45%',
    marginLeft: 'auto',
    marginTop: 15,
    marginBottom:10
  },
  buttonView: [baseStyle.paddingHorizontal10px, baseStyle.paddingVertical3px],
});

export default TimerModal;
