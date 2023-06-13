import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  PermissionsAndroid,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Permissions from 'react-native-permissions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import globalStyles from '../styles/globalStyles';

import DateLabel from '../components/DateLabel';
import CardWeather from '../components/CardWeather';
import TodayForecastCard from '../components/TodayForecastCard';

import {sampleData, data5days} from '../constants/data';

import axios from '../src/axios';

type LocationType = {
  latitude: number | null;
  longitude: number | null;
};

type weatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    '1h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

const Home = () => {
  const [weatherData, setWeatherData] = useState<weatherData>();
  const [currentLocation, setCurrentLocation] = useState<LocationType>({
    latitude: 13.736717,
    longitude: 100.523186,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&units=metric&appid=c0d919cc900c017e3eb82c52744080e0`,
      );

      setWeatherData(response.data);
      console.log(weatherData);
    } catch (error) {
      console.error(error);
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
    console.log(currentLocation);
    fetchData();
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFB347'}}>
      <StatusBar barStyle="dark-content" backgroundColor={'#FFB347'} />
      <View style={{flex: 0.1, flexDirection: 'row'}}>
        <Button title="refresh location" onPress={handleButtonPress}></Button>
        <Text style={globalStyles.nameText}>{weatherData?.name}</Text>
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
            <Text style={globalStyles.highlightText}>Daliy Summary</Text>
            <Text style={globalStyles.Text}>
              Now it feel like +{weatherData?.main.feels_like.toFixed()}, in
              fact +{weatherData?.main.temp.toFixed()}
            </Text>
            <Text style={globalStyles.Text}>
              the temperature is felt in the range from +
              {weatherData?.main.temp_min.toFixed()} to +
              {weatherData?.main.temp_max.toFixed()}
            </Text>
            <CardWeather
              windSpeed={weatherData?.wind.speed}
              humidity={weatherData?.main.humidity}
              visibility={weatherData?.visibility}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={globalStyles.highlightText}>Today Forecast</Text>
            </View>
            <TodayForecastCard list={data5days.list} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
