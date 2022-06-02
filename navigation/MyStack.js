import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SiteScreen from '../screens/SiteScreen';
import Html from '../screens/Html';

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
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'WebView',
        }}
      />
      <Stack.Screen
        name="SiteScreen"
        component={SiteScreen}
        options={{
          title: 'memCrab',
        }}
      />
      <Stack.Screen name="Html" component={Html} />
    </Stack.Navigator>
  );
};

export default MyStack;
