import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import styles from './styles';
import CustomSafeArea from '../../components/customSafeArea';
import {baseStyle, colors} from '../../constant/theme';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/AntDesign';
import TimerModal from '../../components/modal/timerModal';
import TimerCard from '../../components/cards/timer';
import {strings} from '../../constant';
import {useDispatch, useSelector} from 'react-redux';
import {addTaskRequest} from '../../redux/actions/rootstackActions';
import NavigationService from '../../navigation/NavigationService';
import Toast from 'react-native-simple-toast';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import InputComponent from '../../components/input';
import {validateEmpty} from '../../utils/helpers/validation';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AddCompletedTask = () => {
  const editIcon = <Icon name="edit" size={12} color={colors.white} />;
  const closeIcon = (
    <AntDesignIcon name="closecircle" size={15} color={colors.red} />
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [hourCardClicked, setHourCardClicked] = useState(false);
  const [hour, setHour] = useState('00');
  const [minuteCardClicked, setMinuteCardClicked] = useState(false);
  const [minute, setMinute] = useState('00');

  const [taskDuration, setDuration] = useState('00:00:00');
  const [taskTitle, setTaskTitle] = useState('');
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [allTasks, setAllTasks] = useState(taskData);
  const [taskDate, setTaskDate] = useState(new Date());
  const [tagsData, setTagsData] = useState([]);
  const [tagValue, setTagValue] = useState('');
  // reducer data
  const taskData = useSelector(store => store.rootstackReducer.taskData);

  const dispatch = useDispatch();

  useEffect(() => {
    let result = taskData?.reduce(function (r, a) {
      r[a.taskDate] = r[a.taskDate] || [];
      r[a.taskDate].push(a);
      return r;
    }, Object.create(null));

    setAllTasks(result);
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
    let date = moment(taskDate).utc().format('YYYY-MM-DD');
    const data = allTasks?.[date]?.find(item => item.title === title);
    return data ? data : false;
  };

  // add completed task
  const addTask = () => {
    const sameObj = titleMatch(taskTitle);

    if (validateEmpty(taskTitle)) {
      let obj = {
        id: taskData?.length,
        taskTime: taskDuration,
        taskDate: moment(taskDate).utc().format('YYYY-MM-DD'),
        title: taskTitle,
        tags: [],
        startLocation: {},
        stopLocation: {},
      };

      if (sameObj) {
        Toast.show(
          'Task is already on the list of your activities!',
          Toast.SHORT,
        );
      } else {
        dispatch(addTaskRequest(obj));
        NavigationService.goBack();
      }
    } else {
      Toast.show('Please enter task', Toast.SHORT);
    }
  };

  const onTagPress = item => {
    const array = tagsData?.filter(val => val !== item);
    setTagsData(array);
  };

  const onAddTag = () => {
    if (tagsData?.includes(tagValue)) {
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
            header={strings.task}
            onChangeText={val => setTaskTitle(val)}
            value={taskTitle}
            placeholder={strings.iHaveWorkedOn}
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
      <Ripple onPress={() => addTask()} style={styles.deleteView}>
        <Text
          style={baseStyle.txtStylePoppinsSemiBold(
            0.032,
            colors.white,
            strings.uppercase,
          )}>
          {strings.done}
        </Text>
      </Ripple>
    </CustomSafeArea>
  );
};

export default AddCompletedTask;
