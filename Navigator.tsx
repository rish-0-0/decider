import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Playground from './Screens/Playground/Playgrounds';
import History from './Screens/History/History';

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
