import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {weatherDataType} from '../types/weatherDataType';
import globalStyles from '../styles/globalStyles';
const Infomation = ({route, navigation}: any) => {
  const weatherData: weatherDataType = route.params.weatherData;

  return (
    <View style={{flex: 1}}>
      <Text style={globalStyles.Text}>Main</Text>
      <Text style={globalStyles.Text}>
        อุณหภูมิปัจจุบัน {weatherData.main.temp}
      </Text>
      <Text style={globalStyles.Text}>
        รู้สึกเหมือน {weatherData.main.feels_like}
      </Text>
      <Text style={globalStyles.Text}>
        อุณหภูมิต่ำได้มากสุด {weatherData.main.temp_min}
      </Text>
      <Text style={globalStyles.Text}>
        อุณหภูมิสูงสุดได้ถึง {weatherData.main.temp_max}
      </Text>
      <Text style={globalStyles.Text}>
        ความดันอากาศ {weatherData.main.pressure} hPa
      </Text>
      <Text style={globalStyles.Text}>
        ความชื้น {weatherData.main.humidity} %
      </Text>
      <Text style={globalStyles.Text}>
        ความกดอากาศที่ระดับน้ำทะเล {weatherData.main.feels_like} hPa
      </Text>
      <Text style={globalStyles.Text}>
        ความกดอากาศที่ระดับพื้นดิน {weatherData.main.feels_like} hPa
      </Text>
      <Text style={globalStyles.Text}>
        ทัศนวิสัย {weatherData.visibility} m
      </Text>
      <Text style={globalStyles.Text}>ลม</Text>
      <Text style={globalStyles.Text}>
        ความเร็วลม {weatherData.wind.speed} m/s
      </Text>
      <Text style={globalStyles.Text}>ทิศทางลม {weatherData.wind.deg}องศา</Text>
      <Text style={globalStyles.Text}>
        ความเร็วลมกระโชกเเรงถึง {weatherData.wind.gust} m/s
      </Text>
      <Text style={globalStyles.Text}>ฝน</Text>

      <Text style={globalStyles.Text}>เมฆ {weatherData.clouds.all} %</Text>
    </View>
  );
};

export default Infomation;

const styles = StyleSheet.create({});
