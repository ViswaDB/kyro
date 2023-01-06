import React, {useEffect, useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomSafeArea from '../../components/customSafeArea';
import { colors} from '../../constant/theme';
import Spacer from '../../components/spacer';
import {BarChart} from 'react-native-chart-kit';
import {strings} from '../../constant';
import {
  getTodayDate,
  getYesterdayDate,
} from '../../utils/helpers/changeTimeToUTC';
import moment from 'moment';

function SummaryByDays() {
  // reducer data
  const taskData = useSelector(store => store.rootstackReducer.taskData);

  const [allTasks, setAllTasks] = useState(taskData);
  const [totalHours, setTotalHours] = useState([]);
  const [selectedTab, setSelectedTab] = useState(strings.all);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });

  useEffect(() => {
    let result = taskData?.reduce(function (r, a) {
      r[a.taskDate] = r[a.taskDate] || [];
      r[a.taskDate].push(a);
      return r;
    }, Object.create(null));
    getAllChartData(result);
    setAllTasks(result);
  }, [taskData]);

  const getTodayChartData = result => {
    if (result && result[getTodayDate()]) {
      let todayHoursData = result?.[getTodayDate()]?.map(item => {
        let hour = Number(item?.taskTime?.slice(0, 2));
        let minute = Number(item?.taskTime?.slice(3, 5)) / 60;
        let second = Number(item?.taskTime?.slice(6, 8)) / 3600;
        const totalHours = hour + minute + second;
        return totalHours;
      });

      const data = {
        labels: result?.[getTodayDate()]?.map(item => item.title),
        datasets: [
          {
            data: todayHoursData,
          },
        ],
      };
      setChartData(data);
    } else {
      const data = {
        labels: [],
        datasets: [
          {
            data: [],
          },
        ],
      };
      setChartData(data);
    }
  };

  const getYesterdayChartData = result => {
    if (result && result[getYesterdayDate()]) {
      let todayHoursData = result?.[getYesterdayDate()]?.map(item => {
        let hour = Number(item?.taskTime?.slice(0, 2));
        let minute = Number(item?.taskTime?.slice(3, 5)) / 60;
        let second = Number(item?.taskTime?.slice(6, 8)) / 3600;
        const totalHours = hour + minute + second;
        return totalHours;
      });

      const data = {
        labels: result?.[getYesterdayDate()]?.map(item => item.title),
        datasets: [
          {
            data: todayHoursData,
          },
        ],
      };
      setChartData(data);
    } else {
      const data = {
        labels: [],
        datasets: [
          {
            data: [],
          },
        ],
      };
      setChartData(data);
    }
  };

  const getThisWeekData = result => {
    var startOfWeek = moment().startOf('week').toDate();
    var endOfWeek = moment().endOf('week').toDate();

    if (result) {
      let weeklyHoursData = [];
      for (let i = 1; i < 8; i++) {
        let day = moment(startOfWeek).add(i, 'day').utc().format('YYYY-MM-DD');

        if (day in result) {
          let totalDaysData = result?.[day]
            .map(item => {
              let hour = Number(item?.taskTime?.slice(0, 2));
              let minute = Number(item?.taskTime?.slice(3, 5)) / 60;
              let second = Number(item?.taskTime?.slice(6, 8)) / 3600;
              const totalHours = hour + minute + second;
              return totalHours;
            })
            .reduce((prev, next) => prev + next);
          weeklyHoursData.push(totalDaysData);
        } else {
          weeklyHoursData.push(0);
        }
      }

      const data = {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        datasets: [
          {
            data: weeklyHoursData,
          },
        ],
      };
      setChartData(data);
    } else {
      const data = {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        datasets: [
          {
            data: [],
          },
        ],
      };
      setChartData(data);
    }
  };

  const getAllChartData = allTasks => {
    let hoursData = Object.keys(allTasks)?.map(item => {
      let sum = allTasks[item]
        .map(item => {
          let hour = Number(item?.taskTime?.slice(0, 2));
          let minute = Number(item?.taskTime?.slice(3, 5)) / 60;
          let second = Number(item?.taskTime?.slice(6, 8)) / 3600;
          const totalHours = hour + minute + second;
          return totalHours;
        })
        .reduce((prev, next) => prev + next);
      return sum;
    });

    let allData = {
      labels: Object.keys(allTasks),
      datasets: [
        {
          data: hoursData,
        },
      ],
    };

    setChartData(allData);
  };

  const selectTab = tab => {
    setSelectedTab(tab);
  };
  return (
    <CustomSafeArea
      backgroundColor={colors.backgroundColor}
      style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={selectedTab == strings.all ? styles.underline : {}}
          onPress={() => {
            selectTab(strings.all);
            getAllChartData(allTasks);
          }}>
          <Text style={styles.tabText}>{strings.all}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedTab == strings.today ? styles.underline : {}}
          onPress={() => {
            selectTab(strings.today);
            getTodayChartData(allTasks);
          }}>
          <Text style={styles.tabText}>{strings.today}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedTab == strings.yesterday ? styles.underline : {}}
          onPress={() => {
            selectTab(strings.yesterday);
            getYesterdayChartData(allTasks);
          }}>
          <Text style={styles.tabText}>{strings.yesterday}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedTab == strings.thisWeek ? styles.underline : {}}
          onPress={() => {
            selectTab(strings.thisWeek);
            getThisWeekData(allTasks);
          }}>
          <Text style={styles.tabText}>{strings.thisWeek}</Text>
        </TouchableOpacity>
      </View>
      <Spacer height={hp('1.5%')} />

      <BarChart
        style={styles.graphStyle}
        data={chartData}
        width={Dimensions.get('screen').width}
        height={500}
        chartConfig={{
          backgroundColor: colors.primary,
          backgroundGradientFrom: colors.primary,
          backgroundGradientTo: colors.secondaryLight,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        yAxisSuffix=" hr"
        verticalLabelRotation={30}
      />
    </CustomSafeArea>
  );
}

export default SummaryByDays;
