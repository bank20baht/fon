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
import WeekForecast from '../components/WeekForecast';

import {sampleData, data5days} from '../constants/data';

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
    <View style={{flex: 1, backgroundColor: '#FFB347'}}>
      <StatusBar barStyle="dark-content" backgroundColor={'#FFB347'} />
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
              <Text style={globalStyles.highlightText}>Today Forecast</Text>
            </View>
            <WeekForecast list={data5days.list} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
