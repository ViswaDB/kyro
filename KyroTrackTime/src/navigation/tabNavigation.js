import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS, strings} from '../constant';
import screenNames from './screenNames';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {baseStyle, colors} from '../constant/theme';
import {View, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';

const Tab = createBottomTabNavigator();

function MyTabs() {
  
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
            <View>
              <MaterialCommunityIcons
                name="home"
                color={focused ? colors.primary : color}
                size={size}
              />
              {focused && <View style={baseStyle.tabUnderline} />}
            </View>
          ),
          headerShown: false,
        }}
        name={SCREENS.HOME}
        component={screenNames.Home}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
            <View>
              <MaterialCommunityIcons
                name="clock"
                color={focused ? colors.primary : color}
                size={size}
              />
              {focused && <View style={baseStyle.tabUnderline} />}
            </View>
          ),
          header: () => (
            <View style={baseStyle.tabHeader}>
              <Text
                style={baseStyle.txtStylePoppinsSemiBold(0.07, colors.primary)}>
                {strings.tasks}
              </Text>
            </View>
          ),
        }}
        name={SCREENS.SUMMARYNAVIGATION}
        component={screenNames.SummaryNavigation}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
