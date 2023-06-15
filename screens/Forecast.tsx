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

  React.useEffect(() => {
    const fetchDataFromStorage = async () => {
      const storedForecastData = await getData('forecastData');

      if (storedForecastData) {
        setForecastData(storedForecastData);
      }
    };

    fetchDataFromStorage();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Text
        style={{
          backgroundColor: '#363636',
          color: '#FFB347',
          textAlign: 'center',
          fontSize: 15,
          paddingVertical: 2,
        }}>
        {forecastData?.city.name}
      </Text>
      <View style={{flex: 1, backgroundColor: '#FFB347'}}>
        {forecastData ? (
          <FiveDayForecastCard list={forecastData.list} />
        ) : (
          <View
            style={{flex: 0.9, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: 'black'}}>
              Loading forecast data...
            </Text>
          </View>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default Forecast;
