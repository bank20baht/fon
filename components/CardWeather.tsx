import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyles from '../styles/globalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  windSpeed: number | undefined;
  humidity: number | undefined;
  visibility: number | undefined;
};

const CardWeather = (props: Props) => {
  const {windSpeed, humidity} = props;
  const visibility =
    props.visibility !== undefined ? props.visibility / 1000 : 0;

  return (
    <View
      style={{
        backgroundColor: 'black',
        paddingVertical: 10,
        margin: 10,
        borderRadius: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: 10,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="weather-windy"
            color={'#FFB347'}
            size={50}
          />
          <Text style={{color: '#FFB347', textAlign: 'center'}}>
            {windSpeed} km/h
          </Text>
          <Text style={{color: '#FFB347', textAlign: 'center'}}>Wind</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="water-outline"
            color={'#FFB347'}
            size={50}
          />
          <Text style={{color: '#FFB347', textAlign: 'center'}}>
            {humidity} %
          </Text>
          <Text style={{color: '#FFB347', textAlign: 'center'}}>Humidity</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="eye-outline"
            color={'#FFB347'}
            size={50}
          />
          <Text style={{color: '#FFB347', textAlign: 'center'}}>
            {visibility.toFixed()} km
          </Text>
          <Text style={{color: '#FFB347', textAlign: 'center'}}>
            Visibility
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardWeather;

const styles = StyleSheet.create({});
