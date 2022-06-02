import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SiteScreen from '../screens/SiteScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#a60028',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="SiteScreen"
        component={SiteScreen}
        options={{
          title: 'memCrab',
        }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
