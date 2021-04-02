import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';

import People from './Screens/People';
import Playground from './Screens/Playground';
import History from './Screens/History';

const Tabs = createBottomTabNavigator();

interface NavigationProps {}

const AppNavigation: React.FC<NavigationProps> = props => {
  return (
    <Tabs.Navigator initialRouteName="Playground">
      <Tabs.Screen
        name="Playground"
        component={Playground}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="racquetball"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="People"
        component={People}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcons name="users" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="history"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AppNavigation;
