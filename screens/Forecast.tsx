import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';

import {data5days} from '../constants/data';
import FiveDayForecastCard from '../components/FiveDayForecastCard';
import {forecastDataType} from '../types/forecastDataType';
import {getData} from '../src/hooks/asyncStorage';
type Props = {};

const Forecast = () => {
  const [forecastData, setForecastData] = useState<forecastDataType>();

  useEffect(() => {
    const fetchForecastData = async () => {
      const storedForecastData = await getData('forecastData');
      if (storedForecastData) {
        setForecastData(storedForecastData);
      }
    };

    fetchForecastData();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#FFB347'}}>
        {forecastData ? (
          <FiveDayForecastCard list={forecastData.list} />
        ) : (
          <Text>Loading forecast data...</Text>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default Forecast;
