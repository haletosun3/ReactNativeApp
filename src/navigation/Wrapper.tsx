import { View, Text } from 'react-native';
import React from 'react';

import Home from '../screens/Home/Home';
import List from '../screens/List/List';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Wrapper = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="List" component={List} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Wrapper;
