import React, {useState} from 'react';
import {View, Text, Button, PermissionsAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from './screens/Home';
import ListLocation from './screens/ListLocation';
import Infomation from './screens/Infomation';

import {SCREEN_NAME} from './constants/screensNames';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TapScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAME.HOME_PAGE}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === SCREEN_NAME.HOME_PAGE) {
            iconName = 'location';
          } else if (route.name === SCREEN_NAME.LIST_PAGE) {
            iconName = 'list';
          }
          if (!iconName) {
            return null; // or provide a fallback icon or handle the error accordingly
          }

          return <Entypo name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e0ffff', // Change the active tab color
        tabBarInactiveTintColor: 'black', // Change the inactive tab color
        tabBarStyle: {
          backgroundColor: '#0085ff', // Change the background color of the tab bar
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}>
      <Tab.Screen
        name={SCREEN_NAME.HOME_PAGE}
        component={Home}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.LIST_PAGE}
        component={ListLocation}
        options={{
          title: 'List Location',
          headerTitleStyle: {
            color: '#e0ffff',
          },
          headerStyle: {
            backgroundColor: '#0085ff',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TapScreens}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.INFORMATION}
          component={Infomation}
          options={{
            title: 'Infomation',
            headerTitleStyle: {
              color: '#6EC3FF',
            },
            headerStyle: {
              backgroundColor: '#0085ff',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
