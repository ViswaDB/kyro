import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import CustomSafeArea from '../../components/customSafeArea';
import {baseStyle, colors} from '../../constant/theme';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/AntDesign';
import TimerModal from '../../components/modal/timerModal';
import TimerCard from '../../components/cards/timer';
import {SCREENS, strings} from '../../constant';
import {useDispatch, useSelector} from 'react-redux';
import {updateTaskRequest} from '../../redux/actions/rootstackActions';
import NavigationService from '../../navigation/NavigationService';
import Toast from 'react-native-simple-toast';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import InputComponent from '../../components/input';
import {validateEmpty} from '../../utils/helpers/validation';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const EditTask = props => {
  const editIcon = <Icon name="edit" size={12} color={colors.white} />;
  const closeIcon = (
    <AntDesignIcon name="closecircle" size={15} color={colors.red} />
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [hourCardClicked, setHourCardClicked] = useState(false);
  const [hour, setHour] = useState(0);
  const [minuteCardClicked, setMinuteCardClicked] = useState(false);
  const [minute, setMinute] = useState(0);

  const [taskDuration, setDuration] = useState('00:00:00');
  const [taskTitle, setTaskTitle] = useState('');
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [allTasks, setAllTasks] = useState(taskData);
  const [taskDate, setTaskDate] = useState(new Date());
  const [tagsData, setTagsData] = useState([]);
  const [tagValue, setTagValue] = useState('');

  // reducer data
  const taskData = useSelector(store => store.rootstackReducer.taskData);

  const selectedTaskData = props.route.params.taskData;
  const dispatch = useDispatch();

  useEffect(() => {
    let result = taskData?.reduce(function (r, a) {
      r[a.taskDate] = r[a.taskDate] || [];
      r[a.taskDate].push(a);
      return r;
    }, Object.create(null));

    setAllTasks(result);
  }, []);

  useEffect(() => {
    setHour(selectedTaskData?.taskTime.slice(0, 2));
    setMinute(selectedTaskData?.taskTime.slice(3, 5));
    setDuration(selectedTaskData?.taskTime);
    setTaskTitle(selectedTaskData?.title);
    setTaskDate(new Date(selectedTaskData?.taskDate));
    setTagsData(selectedTaskData?.tags);
  }, []);

  // on set time
  const onOkPress = () => {
    let updatedDuration = `${hour.length < 2 ? '0' + hour : hour}:${
      minute.length < 2 ? '0' + minute : minute
    }:00`;

    setDuration(updatedDuration);
    setModalVisible(false);
  };

  // open modal to update time
  const onEdit = () => {
    setModalVisible(true);
  };

  const onChangeHour = value => {
    setHour(value.replace(/[^0-9]/g, ''));
  };

  const onChangeMinute = value => {
    setMinute(value.replace(/[^0-9]/g, ''));
  };

  // to check if the task is already present today
  const titleMatch = title => {
    const data = allTasks[moment(taskDate).utc().format('YYYY-MM-DD')].find(
      item => item.title === title,
    );
    return data ? data : false;
  };

  const onUpdateTime = () => {
    const matchedTask = titleMatch(taskTitle);

    if (validateEmpty(taskTitle)) {
      if (!matchedTask) {
        let alteredData = taskData.map(item => {
          if (item.id === selectedTaskData.id) {
            return {
              ...item,
              taskTime: taskDuration,
              taskDate: moment(taskDate).utc().format('YYYY-MM-DD'),
              title: taskTitle,
            };
          } else {
            return {
              ...item,
            };
          }
        });
        dispatch(updateTaskRequest(alteredData));
        Toast.show('Task updated successfully!', Toast.SHORT);
        NavigationService.goBack();
      } else {
        if (selectedTaskData.taskTime != taskDuration) {
          let alteredData = taskData.map(item => {
            if (item.id === selectedTaskData.id) {
              return {
                ...item,
                taskTime: taskDuration,
              };
            } else {
              return {
                ...item,
              };
            }
          });
          dispatch(updateTaskRequest(alteredData));
          Toast.show('Task updated successfully!', Toast.SHORT);
          NavigationService.goBack();
        } else {
          Toast.show(
            'Task is already present on the selected date.',
            Toast.SHORT,
          );
        }
      }
    } else {
      Toast.show('Please enter task', Toast.SHORT);
    }
  };

  // on delete task
  const onDeleteTask = () => {
    let filteredData = taskData.filter(item => item.id !== selectedTaskData.id);
    dispatch(updateTaskRequest(filteredData));
    NavigationService.goBack();
  };

  const onTagPress = item => {
    const array = tagsData.filter(val => val !== item);
    setTagsData(array);
  };

  const onAddTag = () => {
    if (tagsData.includes(tagValue)) {
      Toast.show('Tag is already present!', Toast.SHORT);
    } else {
      setTagsData([...tagsData, tagValue]);
      setTagValue('');
    }
  };

  return (
    <CustomSafeArea
      backgroundColor={colors.backgroundColor}
      style={styles.container}>
      <Text
        style={[
          baseStyle.txtStylePoppinsSemiBold(0.07, colors.primary),
          baseStyle.width94Percentage,
          baseStyle.alignSelfCenter,
          baseStyle.marginTop3px,
        ]}>
        {strings.tasks}
      </Text>
      <KeyboardAwareScrollView>
        <View style={styles.bodyView}>
          <View
            style={[
              baseStyle.width100Percentage,
              baseStyle.flexDirectionRow,
              baseStyle.justifyContentSB,
            ]}>
            <View style={baseStyle.flexDirectionRow}>
              <Text
                style={[baseStyle.txtStylePoppinsBold(0.08, colors.primary)]}>
                {taskDuration}
              </Text>
              <Ripple onPress={onEdit} style={styles.editView}>
                {editIcon}
              </Ripple>
            </View>
            <Ripple
              onPress={() => onUpdateTime(hour, minute)}
              style={[baseStyle.alignSelfCenter, baseStyle.padding5px]}>
              <Text
                style={[
                  baseStyle.txtStylePoppinsBold(
                    0.04,
                    colors.primary,
                    strings.uppercase,
                  ),
                ]}>
                {strings.done}
              </Text>
            </Ripple>
          </View>
          <DatePicker
            modal
            open={datePickerOpen}
            date={taskDate}
            onConfirm={date => {
              setDatePickerOpen(false);
              setTaskDate(date);
            }}
            onCancel={() => {
              setDatePickerOpen(false);
            }}
            maximumDate={new Date()}
            mode={strings.date}
          />

          <InputComponent
            header={strings.iHaveWorkedOn}
            onChangeText={val => setTaskTitle(val)}
            value={taskTitle}
          />

          <InputComponent
            header={strings.taskDate}
            value={moment(taskDate).utc().format('YYYY-MM-DD')}
            pressable={true}
            onPress={() => setDatePickerOpen(true)}
          />

          <InputComponent
            header={strings.tags}
            onChangeText={val => setTagValue(val)}
            value={tagValue}
            placeholder={'Enter tasks here'}
          />

          <Ripple onPress={onAddTag} style={styles.addTagView}>
            <Text
              style={baseStyle.txtStylePoppinsMedium(
                0.035,
                colors.primary,
              )}>{`# Add Tags`}</Text>
          </Ripple>

          <FlatList
            data={tagsData}
            horizontal
            renderItem={({item}) => {
              return (
                <Ripple
                  onPress={() => onTagPress(item)}
                  style={baseStyle.paddingVertical10px}>
                  <View style={baseStyle.alignSelfCenter}>
                    <Text style={styles.tagText}>{item}</Text>
                  </View>
                  <View style={styles.closeIcon}>{closeIcon}</View>
                </Ripple>
              );
            }}
          />
        </View>

        <TimerModal
          onBackdropPress={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
          modalVisible={modalVisible}
          onCancelPress={() => setModalVisible(false)}
          onOkPress={onOkPress}
          children={() => {
            return (
              <>
                <TimerCard
                  time={hour}
                  onChangeText={onChangeHour}
                  clicked={hourCardClicked}
                  onFocus={() => {
                    setHourCardClicked(true);
                    setMinuteCardClicked(false);
                  }}
                  title={strings.hours}
                />
                <Text
                  style={[
                    baseStyle.txtStylePoppinsSemiBold(0.05, colors.primary),
                    baseStyle.alignSelfCenter,
                  ]}>
                  :
                </Text>
                <TimerCard
                  time={minute}
                  onChangeText={onChangeMinute}
                  clicked={minuteCardClicked}
                  onFocus={() => {
                    setMinuteCardClicked(true);
                    setHourCardClicked(false);
                  }}
                  title={strings.minutes}
                />
              </>
            );
          }}
        />
      </KeyboardAwareScrollView>
      <Ripple onPress={onDeleteTask} style={styles.deleteView}>
        <Text
          style={baseStyle.txtStylePoppinsSemiBold(
            0.032,
            colors.white,
            strings.uppercase,
          )}>
          {strings.deleteActivity}
        </Text>
      </Ripple>
    </CustomSafeArea>
  );
};

export default EditTask;
