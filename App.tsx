import React, {useState} from 'react';
import {View, Text, Button, PermissionsAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from './screens/Home';
import ListLocation from './screens/ListLocation';
import Infomation from './screens/Infomation';
import Forecast from './screens/Forecast';
import ZipcodeWeather from './screens/ZipcodeWeather';

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
          } else if (route.name === SCREEN_NAME.FORECAST) {
            iconName = 'calendar';
          }
          if (!iconName) {
            return null; // or provide a fallback icon or handle the error accordingly
          }

          return <Entypo name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFB347', // Change the active tab color
        tabBarInactiveTintColor: 'white', // Change the inactive tab color
        tabBarStyle: {
          backgroundColor: '#363636', // Change the background color of the tab bar
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}>
      <Tab.Screen
        name={SCREEN_NAME.LIST_PAGE}
        component={ListLocation}
        options={{
          title: 'List Location',
          headerTitleStyle: {
            color: 'black',
          },
          headerStyle: {
            backgroundColor: '#FFB347',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.HOME_PAGE}
        component={Home}
        options={{
          title: 'Today',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.FORECAST}
        component={Forecast}
        options={{
          title: 'Forecast 5 Days',
          headerTitleStyle: {
            color: 'black',
          },
          headerStyle: {
            backgroundColor: '#FFB347',
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
              color: 'black',
            },
            headerStyle: {
              backgroundColor: '#FFB347',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={SCREEN_NAME.ZIPCODE}
          component={ZipcodeWeather}
          options={({route}) => ({
            title: 'ZIP CODE',
            headerTitleStyle: {
              color: 'black',
            },
            headerStyle: {
              backgroundColor: '#FFB347',
            },
            headerTitleAlign: 'center',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
