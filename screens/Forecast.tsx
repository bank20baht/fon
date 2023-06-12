import React from 'react';
import {View, Text} from 'react-native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';

import {data5days} from '../constants/data';
import FiveDayForecastCard from '../components/FiveDayForecastCard';

type Props = {};

const Forecast = (props: Props) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#FFB347'}}>
        <FiveDayForecastCard list={data5days.list} />
      </View>
    </GestureHandlerRootView>
  );
};

export default Forecast;
