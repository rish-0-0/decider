import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import People from './Screens/People';
import Playground from './Screens/Playground';
import History from './Screens/History';

const Tabs = createBottomTabNavigator();

interface NavigationProps {

}

const AppNavigation: React.FC<NavigationProps> = (props) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Playground" component={Playground} />
      <Tabs.Screen name="People" component={People} />
      <Tabs.Screen name="History" component={History} />
    </Tabs.Navigator>
  );
}

export default AppNavigation;