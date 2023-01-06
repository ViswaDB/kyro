import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {SCREENS, strings} from '../../constant';
import CustomSafeArea from '../../components/customSafeArea';
import {baseStyle, colors} from '../../constant/theme';
import TaskCard from '../../components/cards/task';
import Spacer from '../../components/spacer';
import Ripple from 'react-native-material-ripple';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetComponent from '../../components/bottomsheet';
import NavigationService from '../../navigation/NavigationService';
import {
  addTaskRequest,
  updateTaskRequest,
} from '../../redux/actions/rootstackActions';
import Toast from 'react-native-simple-toast';
import EmptyComponent from '../../components/empty';
import {SwipeListView} from 'react-native-swipe-list-view';
import {getDay, getTodayDate} from '../../utils/helpers/changeTimeToUTC';
import Header from '../../components/header';
import {validateEmpty} from '../../utils/helpers/validation';
import moment from 'moment';
import {
  GetLatittudeLongitude,
  openSettingsPopup,
  PermissionRequests,
} from '../../utils/helpers/getLocation';
import Geolocation from '@react-native-community/geolocation';

const HomeScreen = () => {
  // vector icons
  const deleteIcon = (
    <MaterialIcons name="delete" size={25} color={colors.red} />
  );
  const continueIcon = (
    <EntypoIcon name="controller-play" size={25} color={colors.primary} />
  );

  // refs
  const BottomSheetRef = useRef(null);
  const ExistTaskSheetRef = useRef(null);
  const inputRef = useRef(null);

  // reducer data
  const taskData = useSelector(store => store.rootstackReducer.taskData);

  // local states
  const [taskTitle, setTaskTitle] = useState('');
  const [taskTime, setTaskTime] = useState('00:00:00');
  const [selectedTask, setSelectedTask] = useState({});
  const [selectedTaskTime, setSelectedTaskTime] = useState('');
  const [pause, setPause] = useState(false);
  const [stop, setStop] = useState(false);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [tagEnter, setTagEnter] = useState(false);
  const [tagValue, setTagValue] = useState('');
  const [tagsData, setTagsData] = useState([]);

  const [allTasks, setAllTasks] = useState([]);
  const [startLocation, setStartLocation] = useState({});
  const [stopLocation, setStopLocation] = useState({});

  useEffect(() => {
    const arr = taskData.map(item => {
      return {
        ...item,
        taskDate: new Date(item.taskDate),
      };
    });
    const sortedAsc = arr.sort(
      (objA, objB) => objA.taskDate.getTime() - objB.taskDate.getTime(),
    );

    let finalArr = sortedAsc.reverse();

    let allData = finalArr.map(item => {
      return {
        ...item,
        taskDate: moment(item.taskDate).format('YYYY-MM-DD'),
      };
    });

    let result = allData?.reduce(function (r, a) {
      r[a.taskDate] = r[a.taskDate] || [];
      r[a.taskDate].push(a);
      return r;
    }, Object.create(null));

    setAllTasks(result);
  }, [taskData]);

  // timer effect
  useEffect(() => {
    const timerId = setInterval(() => {
      if (!pause) {
        if (Number(secs) == 0 && Number(mins) <= 59) {
          setSecs(Number(secs) + 1);
          setMins(Number(mins));
        } else if (Number(secs) >= 59 && Number(mins) <= 58) {
          setMins(Number(mins) + 1);
          setSecs(0);
        } else if (Number(secs) >= 59 && Number(mins >= 59)) {
          setHours(Number(hours) + 1);
          setMins(0);
          setSecs(0);
        } else {
          setSecs(Number(secs) + 1);
        }
      }
    }, 1000);
    if (stop) {
      clearInterval(timerId);
    }
    return () => clearInterval(timerId);
  }, [secs, mins, pause, stop]);

  const dispatch = useDispatch();

  // UI flatlist
  const renderTasks = ({item}) => {
    return (
      <TaskCard
        onCardPress={() =>
          NavigationService.navigate(SCREENS.EDITTASK, {taskData: item})
        }
        taskTitle={item.title}
        taskTime={item.taskTime}
        onPlayPress={() => {
          start(item);
        }}
        startLocation={item.startLocation}
        stopLocation={item.stopLocation}
      />
    );
  };

  const onChangeTaskTitle = value => {
    setTaskTitle(value);
  };

  // newly add task
  const addTask = () => {
    if (validateEmpty(taskTitle)) {
      const sameObj = titleMatch(taskTitle);

      let obj = {
        id: taskData?.length,
        title: taskTitle,
        taskTime: taskTime,
        taskDate: getTodayDate(),
        tags: tagsData,
      };

      if (sameObj) {
        Toast.show(
          'Task is already on the list of your activities!',
          Toast.SHORT,
        );
      } else {
        dispatch(addTaskRequest(obj));
        setTagsData([]);
      }
      BottomSheetRef.current.close();
      setTaskTitle('');
    } else {
      Toast.show('Please enter task', Toast.SHORT);
    }
  };

  // to check if the task is already present today
  const titleMatch = title => {
    console.log('getTodayDate', getTodayDate);
    if (allTasks && allTasks[getTodayDate()]) {
      const data = allTasks[getTodayDate()].find(item => item.title === title);
      return data ? data : false;
    } else {
      return false;
    }
  };

  // on start task timer
  const onPlay = item => {
    setSelectedTask(item);
    setSelectedTaskTime(item.taskTime);

    const matchedTask = titleMatch(item.title);

    if (matchedTask) {
      setHours(Number(matchedTask?.taskTime?.slice(0, 2)));
      setMins(Number(matchedTask?.taskTime?.slice(3, 5)));
      setSecs(Number(matchedTask?.taskTime?.slice(6, 8)));
      ExistTaskSheetRef.current.open();
    } else {
      setHours(0);
      setMins(0);
      setSecs(0);
      ExistTaskSheetRef.current.open();
    }
  };

  // on stop started task timer
  const onExistingTaskStop = (stopLocation) => {
    setPause(true);
    let updatedTime = `${hours < 10 ? '0' + hours : hours}:${
      mins < 10 ? '0' + mins : mins
    }:${secs < 10 ? '0' + secs : secs}`;

    ExistTaskSheetRef.current.close();

    const matchedTask = titleMatch(selectedTask.title);
    // updating existing task time
    if (matchedTask) {
      let alteredData = taskData.map(item => {
        if (item.id === matchedTask.id) {
          return {
            ...item,
            taskTime: updatedTime,
            taskDate: getTodayDate(),
            startLocation: startLocation,
            stopLocation: stopLocation,
          };
        } else {
          return {
            ...item,
          };
        }
      });
      dispatch(updateTaskRequest(alteredData));
    } else {
      let obj = {
        id: taskData?.length,
        title: selectedTask.title,
        taskTime: updatedTime,
        taskDate: getTodayDate(),
        startLocation: startLocation,
        stopLocation: stopLocation,
      };
      dispatch(addTaskRequest(obj));
    }
  };

  // on delete task
  const onDeleteTask = e => {
    let filteredData = taskData.filter(item => item.id !== e.id);
    dispatch(updateTaskRequest(filteredData));
  };

  const onAddTag = () => {
    if (validateEmpty(tagValue)) {
      if (tagsData.includes(tagValue)) {
        Toast.show('Tag is already present!', Toast.SHORT);
      } else {
        setTagsData([...tagsData, tagValue]);
        setTagValue('');
      }
    } else {
      Toast.show('Please add tag', Toast.SHORT);
    }
  };

  const onDeleteTag = item => {
    const array = tagsData.filter(val => val !== item);
    setTagsData(array);
  };

  const start = item => {
    console.log('start fn');
    GetLatittudeLongitude(
      data => {
        locationCallbacks('START', data, item);
      },
      () => {
        // permission denied
        Toast.show(
          'Permission denied...Timer need location access!',
          Toast.SHORT,
        );
      },
    );
  };

  const locationCallbacks = (type, data, item) => {
    if (type == 'START') {
      onPlay(item);
      setStartLocation(data);
    } else {
      setStopLocation(data)
        onExistingTaskStop(data)
      
    }
  };

  const stopFn = () => {
    GetLatittudeLongitude(
      data => {
        locationCallbacks('STOP', data, []);
      },
      () => {
        // permission dined
        Modal.alert('Permission Dined! Timer need location access!');
      },
    );
  };

  // get permission
  const getPermission = type => {
    PermissionRequests(
      'locations',
      () => {
        //permission granted
        type == strings.start ? start() : stopFn();
      },
      () => {
        //permissoin dined
        // Modal.alert('Permission Dined! Timer need location access!');
        openSettingsPopup(
          'Location Permission Required',
          'Timer needs your location access!',
        );
      },
    );
  };

  return (
    <CustomSafeArea
      backgroundColor={colors.backgroundColor}
      style={styles.container}>
      <Header
        showPlus={true}
        onPress={() => NavigationService.navigate(SCREENS.ADDCOMPLETEDTASK)}
      />
      <View style={styles.bodyView}>
        <Text
          style={baseStyle.txtStylePoppinsMedium(
            0.045,
            colors.primary,
            strings.uppercase,
          )}>
          {strings.yourActivity}
        </Text>
        <Spacer height={8} />
      </View>

      <FlatList
        data={Object.keys(allTasks)}
        style={baseStyle.width96Percentage}
        renderItem={({item}) => {
          return (
            <View style={baseStyle.width100Percentage}>
              <Text style={styles.dayText}>{getDay(item)}</Text>
              <SwipeListView
                data={allTasks[item]}
                style={[
                  baseStyle.width100Percentage,
                  baseStyle.alignSelfCenter,
                ]}
                renderItem={data => renderTasks(data)}
                ListEmptyComponent={() => {
                  return <EmptyComponent />;
                }}
                renderHiddenItem={(data, rowMap) => (
                  <View style={styles.hiddeItemContainer}>
                    <TouchableOpacity
                      onPress={() => getPermission(strings.start)}
                      style={styles.hiddenView}>
                      {continueIcon}
                      <Text
                        style={baseStyle.txtStylePoppinsSemiBold(
                          0.03,
                          colors.primary,
                        )}>
                        {strings.continue}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => onDeleteTask(data?.item)}
                      style={styles.hiddenView}>
                      {deleteIcon}
                      <Text
                        style={baseStyle.txtStylePoppinsSemiBold(
                          0.03,
                          colors.red,
                        )}>
                        {strings.delete}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                leftOpenValue={75}
                rightOpenValue={-70}
              />
            </View>
          );
        }}
        ListEmptyComponent={() => {
          return <EmptyComponent />;
        }}
      />
      <Ripple
        onPress={() => BottomSheetRef.current.open()}
        style={styles.floatingButton}>
        <Text
          style={baseStyle.txtStylePoppinsSemiBold(
            0.034,
            colors.white,
            strings.uppercase,
          )}>
          New
        </Text>
      </Ripple>

      <RBSheet
        ref={ExistTaskSheetRef}
        openDuration={250}
        closeOnDragDown={false}
        closeOnPressBack={false}
        closeOnPressMask={false}
        height={150}
        onClose={() => setPause(false)}
        customStyles={styles.bottomSheet}>
        <BottomSheetComponent
          taskTitle={selectedTask?.title}
          taskTime={selectedTaskTime}
          sheet={strings.oldTask}
          onStopPress={() => stopFn(strings.stop)}
          updatingTime={`${hours < 10 ? '0' + hours : hours}:${
            mins < 10 ? '0' + mins : mins
          }:${secs < 10 ? '0' + secs : secs}`}
        />
      </RBSheet>

      <RBSheet
        ref={BottomSheetRef}
        openDuration={250}
        closeOnDragDown={true}
        onOpen={() => inputRef.current.focus()}
        height={220}
        customStyles={styles.bottomSheet}>
        <BottomSheetComponent
          header={strings.addTask}
          textInputRef={inputRef}
          titleValue={taskTitle}
          onChangeTaskTitle={onChangeTaskTitle}
          onAddPress={() => addTask()}
          sheet={strings.newTask}
          tagEnter={tagEnter}
          onAddTagPress={() =>
            validateEmpty(taskTitle)
              ? onAddTag()
              : Toast.show('Please add task first!', Toast.SHORT)
          }
          tagValue={tagValue}
          onChangeTag={val => setTagValue(val)}
          tagsData={tagsData}
          onTagPress={item => onDeleteTag(item)}
        />
      </RBSheet>
    </CustomSafeArea>
  );
};

export default HomeScreen;
