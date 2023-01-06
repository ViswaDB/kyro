import React from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {strings} from '../../constant';
import {baseStyle, colors} from '../../constant/theme';
import Spacer from '../spacer';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ripple from 'react-native-material-ripple';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const BottomSheetComponent = ({
  textInputRef,
  header,
  taskTitleValue,
  onChangeTaskTitle,
  onAddPress,
  sheet = strings.newTask,
  taskTitle,
  taskTime,
  onStopPress,
  updatingTime,
  tagValue,
  onChangeTag,
  tagEnter = false,
  onAddTagPress,
  tagsData,
  onTagPress = () => {},
}) => {
  const stopIcon = (
    <Icon name="stop-circle-o" size={50} color={colors.primary} />
  );

  const closeIcon = (
    <AntDesignIcon name="closecircle" size={10} color={colors.red} />
  );

  return (
    <View style={styles.container}>
      {sheet === strings.newTask ? (
        <>
          <View style={styles.headerView}>
            <View style={baseStyle.width30Percentage} />
            <Text style={styles.header}>{header}</Text>
            <View style={baseStyle.width30Percentage}>
              <TouchableOpacity
                onPress={onAddPress}
                style={baseStyle.alignSelfCenter}>
                <Text
                  style={[
                    baseStyle.txtStylePoppinsSemiBold(
                      0.035,
                      colors.secondaryLight,
                      strings.uppercase,
                    ),
                    {
                      marginLeft: '50%',
                    },
                  ]}>
                  {strings.add}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Spacer height={10} />

          <TextInput
            autoFocus={true}
            ref={textInputRef}
            returnKeyType="none"
            style={baseStyle.txtStylePoppinsMedium(0.035, colors.primary)}
            cursorColor={colors.primary}
            placeholder={strings.iWillBeWorkingOn}
            multiline={true}
            value={taskTitleValue}
            onChangeText={onChangeTaskTitle}
          />
          <TextInput
            returnKeyType="none"
            style={styles.tagInput}
            cursorColor={colors.primary}
            placeholder={strings.enterTagsHere}
            value={tagValue}
            onChangeText={onChangeTag}
          />

          <View style={baseStyle.flexDirectionRow}>
            <Ripple onPress={onAddTagPress} style={styles.addTagView}>
              <Text
                style={baseStyle.txtStylePoppinsMedium(
                  0.035,
                  colors.primary,
                )}>{`# Add Tags`}</Text>
            </Ripple>
            <FlatList
              data={tagsData}
              horizontal
              keyboardShouldPersistTaps="always"
              renderItem={({item}) => {
                return (
                  <Ripple
                    style={baseStyle.alignSelfCenter}
                    onPress={() => onTagPress(item)}>
                    <Text style={styles.tagText}>{item}</Text>
                    <View style={styles.closeIcon}>{closeIcon}</View>
                  </Ripple>
                );
              }}
            />
          </View>
        </>
      ) : (
        <View
          style={[
            styles.headerView,
            baseStyle.paddingRight10px,
            baseStyle.marginTop10px,
          ]}>
          <View>
            <Text style={baseStyle.txtStylePoppinsBold(0.045, colors.primary)}>
              {updatingTime}
            </Text>
            <Spacer height={5} />
            <Text
              style={baseStyle.txtStylePoppinsSemiBold(0.035, colors.primary)}>
              {taskTitle}
            </Text>
          </View>
          <Ripple onPress={onStopPress} style={baseStyle.marginLeft25px}>
            {stopIcon}
          </Ripple>
        </View>
      )}
    </View>
  );
};

export default BottomSheetComponent;
