import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home';
import CreateTasks from '../pages/Create';
import EditTask from '../pages/EditTask';
import Request from '../pages/Request';
import MyTasks from '../pages/MyTasks';

const stackRoutes = createStackNavigator<RootStackParamList>();


export type RootStackParamList = {
  CreateTasks: undefined;
  Home: undefined;
  EditTask: undefined;
  Request: undefined;
  MyTasks: undefined;
};


const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: "horizontal",
      cardStyle: {
        backgroundColor: "#fff"
      }
    }}
  >

    <stackRoutes.Screen
      name="Home"
      component={Home}
    />

    <stackRoutes.Screen
      name="CreateTasks"
      component={CreateTasks}
    />

    <stackRoutes.Screen
      name="EditTask"
      component={EditTask}
    />

    <stackRoutes.Screen
      name="Request"
      component={Request}
    />

    <stackRoutes.Screen
      name="MyTasks"
      component={MyTasks}
    />

  </stackRoutes.Navigator>
)

export default AppRoutes;