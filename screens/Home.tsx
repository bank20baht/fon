import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  PermissionsAndroid,
  ScrollView,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import globalStyles from '../styles/globalStyles';

import DateLabel from '../components/DateLabel';
import CardWeather from '../components/CardWeather';
import TodayForecastCard from '../components/TodayForecastCard';
import {SCREEN_NAME} from '../constants/screensNames';
import {weatherDataType} from '../types/weatherDataType';
import {forecastDataType} from '../types/forecastDataType';

import axios from '../src/axios';
import {getData, storeData} from '../src/hooks/asyncStorage';

type LocationType = {
  latitude: number | null;
  longitude: number | null;
};

const Home = ({route, navigation}: any) => {
  const [weatherData, setWeatherData] = useState<weatherDataType>();
  const [forecastData, setForecastData] = useState<forecastDataType>();
  const [currentLocation, setCurrentLocation] = useState<LocationType>();

  const informationPage = () => {
    navigation.navigate(SCREEN_NAME.INFORMATION, {
      weatherData: weatherData,
    });
  };

  const requestPosition = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            setCurrentLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('Location permission denied.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestPosition();
    // Fetch data every hour
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentLocation) {
          const responseWeather = await axios.get(
            `weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&units=metric&appid=c0d919cc900c017e3eb82c52744080e0`,
          );
          setWeatherData(responseWeather.data);

          const responseForecast = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&units=metric&appid=c0d919cc900c017e3eb82c52744080e0`,
          );
          setForecastData(responseForecast.data);
          storeData('weatherData', responseWeather.data);
          storeData('forecastData', responseForecast.data);
          console.log(weatherData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentLocation]);

  useEffect(() => {
    fetchDataFromStorage();
  }, []);

  const fetchDataFromStorage = async () => {
    const storedWeatherData = await getData('weatherData');
    const storedForecastData = await getData('forecastData');

    if (storedWeatherData) {
      setWeatherData(storedWeatherData);
    }

    if (storedForecastData) {
      setForecastData(storedForecastData);
    }
  };

  const handleButtonPress = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            setCurrentLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });

            // Fetch data after getting the updated location
            fetchData();
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('Location permission denied.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      if (currentLocation) {
        const responseWeather = await axios.get(
          `weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&units=metric&appid=c0d919cc900c017e3eb82c52744080e0`,
        );
        setWeatherData(responseWeather.data);

        const responseForecast = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&units=metric&appid=c0d919cc900c017e3eb82c52744080e0`,
        );
        setForecastData(responseForecast.data);
        storeData('weatherData', responseWeather.data);
        storeData('forecastData', responseForecast.data);
        console.log(weatherData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFB347'}}>
      <StatusBar barStyle="dark-content" backgroundColor={'#FFB347'} />
      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={globalStyles.nameText}>
          {weatherData?.name}, {weatherData?.sys.country}
        </Text>
        <FontAwesome
          name="refresh"
          size={25}
          color={'black'}
          onPress={handleButtonPress}
          style={{paddingLeft: 10}}
        />
      </View>
      <ScrollView style={{flex: 0.9}}>
        <View>
          <DateLabel />

          <Text style={globalStyles.statusText}>
            {weatherData?.weather[0].main}
          </Text>
          <Text style={globalStyles.TempText}>
            {weatherData?.main.temp.toFixed()}°
          </Text>
          <View style={{margin: 20}}>
            <Text style={globalStyles.highlightText}>Daily Summary</Text>
            <Text style={globalStyles.Text}>
              Now it feels like +{weatherData?.main.feels_like.toFixed()}, in
              fact +{weatherData?.main.temp.toFixed()}
            </Text>
            <Text style={globalStyles.Text}>
              The temperature is felt in the range from +
              {weatherData?.main.temp_min.toFixed()} to +
              {weatherData?.main.temp_max.toFixed()}
            </Text>
            <CardWeather
              windSpeed={weatherData?.wind.speed}
              humidity={weatherData?.main.humidity}
              visibility={weatherData?.visibility}
            />
            {weatherData ? (
              <Pressable onPress={informationPage}>
                <View>
                  <Text
                    style={{
                      color: '#FFB347',
                      backgroundColor: 'black',
                      fontSize: 20,
                      padding: 5,
                      textAlign: 'center',
                    }}>
                    MORE INFOMATION
                  </Text>
                </View>
              </Pressable>
            ) : (
              <View
                style={{
                  flex: 0.9,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#FFB347',
                    backgroundColor: 'black',
                    fontSize: 15,
                    padding: 5,
                    textAlign: 'center',
                  }}>
                  ข้อมูลผิดพลาด อัพเดท location ของคุณเเล้วลองใหม่
                </Text>
              </View>
            )}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={globalStyles.highlightText}>Today Forecast</Text>
            </View>
            <TodayForecastCard list={forecastData?.list} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
