import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native';
import {SCREENS, strings} from '../constant';
import {baseStyle, colors} from '../constant/theme';
import SummaryByDays from '../screens/summaryByDays';
import SummaryByTags from '../screens/summaryByTags';

const Tab = createMaterialTopTabNavigator();

function SummaryNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{tabBarStyle: {backgroundColor: colors.backgroundColor}}}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: strings.summaryByDays,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIndicatorStyle: styles.tabBarIndicator,
        }}
        name={SCREENS.SUMMARYBYDAYS}
        component={SummaryByDays}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: strings.summaryByTags,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIndicatorStyle: styles.tabBarIndicator,
        }}
        name={SCREENS.SUMMARYBYTAGS}
        component={SummaryByTags}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarLabel: {
    textTransform: 'capitalize',
    ...baseStyle.txtStylePoppinsSemiBold(
      0.04,
      colors.primary,
      strings.uppercase,
    ),
  },
  tabBarIndicator: {backgroundColor: colors.secondaryLight},
});

export default SummaryNavigation;
