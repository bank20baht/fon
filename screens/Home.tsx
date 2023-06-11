import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  PermissionsAndroid,
  ScrollView,
  StatusBar,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Permissions from 'react-native-permissions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import globalStyles from '../styles/globalStyles';

import DateLabel from '../components/DateLabel';
import CardWeather from '../components/CardWeather';
import WeekForecast from '../components/WeekForecast';
// forecast weather 5 day https://api.openweathermap.org/data/2.5/weather?lat=8.4575667&lon=99.7403917&units=metric&appid=c0d919cc900c017e3eb82c52744080e0
// get current weather https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longtitude}&units=metric&appid=c0d919cc900c017e3eb82c52744080e0
const sampleData = {
  coord: {
    lon: 99.7404,
    lat: 8.4576,
  },
  weather: [
    {
      id: 501,
      main: 'Rain',
      description: 'moderate rain',
      icon: '10d',
    },
  ],
  base: 'stations',
  main: {
    temp: 30.66,
    feels_like: 34.85,
    temp_min: 30.66,
    temp_max: 31.24,
    pressure: 1006,
    humidity: 63,
    sea_level: 1006,
    grnd_level: 960,
  },
  visibility: 10000,
  wind: {
    speed: 3.03,
    deg: 266,
    gust: 5.48,
  },
  rain: {
    '1h': 2.33,
  },
  clouds: {
    all: 97,
  },
  dt: 1686477774,
  sys: {
    type: 2,
    id: 2038449,
    country: 'TH',
    sunrise: 1686438149,
    sunset: 1686483529,
  },
  timezone: 25200,
  id: 1151278,
  name: 'Phrom Khiri',
  cod: 200,
};

const Home = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

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
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
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

  return (
    <View style={{flex: 1, backgroundColor: '#FFE142'}}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFE142" />
      <View style={{flex: 0.1}}>
        <Text style={globalStyles.nameText}>{sampleData.name}</Text>
      </View>
      <ScrollView style={{flex: 0.9}}>
        <View>
          <DateLabel />

          <Text style={globalStyles.statusText}>
            {sampleData.weather[0].main}
          </Text>
          <Text style={globalStyles.TempText}>
            {sampleData.main.temp.toFixed()}°
          </Text>
          <View style={{margin: 20}}>
            <Text style={globalStyles.highlightText}>Daliy Summary</Text>
            <Text style={globalStyles.Text}>
              Now it feel like +{sampleData.main.feels_like.toFixed()}, in fact
              +{sampleData.main.temp.toFixed()}
            </Text>
            <Text style={globalStyles.Text}>
              the temperature is felt in the range from +
              {sampleData.main.temp_min.toFixed()} to +
              {sampleData.main.temp_max.toFixed()}
            </Text>
            <CardWeather
              windSpeed={sampleData.wind.speed}
              humidity={sampleData.main.humidity}
              visibility={sampleData.visibility}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={globalStyles.highlightText}>Weekly forecast</Text>
              <FontAwesome
                name={'long-arrow-right'}
                size={30}
                color={'black'}
              />
            </View>
            <WeekForecast />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
