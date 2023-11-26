import React, {useEffect, useState} from 'react';

import Home from './src/screens/Home/Home';
import List from './src/screens/List/List';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './src/screens/Profile/Profile';
import Context from './src/context/Context';
import useFetch from './src/hooks/useFetch';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const url = 'https://dummyjson.com/products';
const App = ({navigation}) => {
  const {data} = useFetch(url);
  console.log('app.tsx', data);
  const [value, setValue] = useState(data);

  useEffect(() => {
    setValue(data.products);
  }, [data]);

  const values = {
    value,
    setValue,
  };
console.log("app.tsx", value)
  return (
    <Context.Provider value={values}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default App;
