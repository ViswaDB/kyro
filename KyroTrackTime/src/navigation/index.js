import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenName from './screenNames';
import {NavigationContainer} from '@react-navigation/native';
import NavigationService from './NavigationService';

import {SCREENS} from '../constant';

export const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator initialRouteName={SCREENS.SPLASH}>
        <Stack.Screen
          name={SCREENS.SPLASH}
          component={ScreenName.Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.LOGIN}
          component={ScreenName.Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.MYTABS}
          component={ScreenName.MyTabs}
          options={{headerShown: false}}
        />
       
        <Stack.Screen
          name={SCREENS.EDITTASK}
          component={ScreenName.EditTask}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.ADDCOMPLETEDTASK}
          component={ScreenName.AddCompletedTask}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.SUMMARYNAVIGATION}
          component={ScreenName.SummaryNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
