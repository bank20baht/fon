import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {weatherDataType} from '../types/weatherDataType';
import globalStyles from '../styles/globalStyles';
const Infomation = ({route, navigation}: any) => {
  const weatherData: weatherDataType = route.params.weatherData;

  return (
    <View style={{flex: 1, backgroundColor: '#ffecc9'}}>
      <Text
        style={{
          backgroundColor: '#363636',
          color: '#FFB347',
          textAlign: 'center',
          fontSize: 15,
          paddingVertical: 2,
        }}>
        {weatherData.name}, {weatherData.sys.country}
      </Text>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 0.3}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 65,
              height: 65,
              backgroundColor: '#999999',
              borderRadius: 40,
            }}
            source={{
              uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`,
            }}
          />
          <Text style={styles.tempText}>
            {weatherData.main.temp.toFixed(1)}°
          </Text>
        </View>
        <Text style={styles.describeTempText}>
          {weatherData.weather[0].description}
        </Text>
      </View>

      <View style={{margin: 15, flex: 0.7}}>
        <View style={styles.textLayout}>
          <Text style={globalStyles.h2}>รู้สึกเหมือน</Text>
          <Text style={globalStyles.h2}>{weatherData.main.feels_like} °</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.textLayout}>
          <Text style={globalStyles.h2}>อุณหภูมิต่ำได้มากสุด</Text>
          <Text style={globalStyles.h2}>{weatherData.main.temp_min} °</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.textLayout}>
          <Text style={globalStyles.h2}>อุณหภูมิสูงสุดได้ถึง</Text>
          <Text style={globalStyles.h2}>{weatherData.main.temp_max} °</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.textLayout}>
          <Text style={globalStyles.h2}>ความดันอากาศ</Text>
          <Text style={globalStyles.h2}>{weatherData.main.pressure} hPa</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.textLayout}>
          <Text style={globalStyles.h2}>ความชื้น</Text>
          <Text style={globalStyles.h2}>{weatherData.main.humidity} %</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.textLayout}>
          <Text style={globalStyles.h2}>ความกดอากาศที่ระดับน้ำทะเล</Text>
          <Text style={globalStyles.h2}>{weatherData.main.feels_like} hPa</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.textLayout}>
          <Text style={globalStyles.h2}>ความกดอากาศที่ระดับพื้นดิน</Text>
          <Text style={globalStyles.h2}>{weatherData.main.feels_like} hPa</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.textLayout}>
          <Text style={globalStyles.h2}>ทัศนวิสัย</Text>
          <Text style={globalStyles.h2}>{weatherData.visibility} m</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.textLayout}>
          <Text style={globalStyles.h2}>ความเร็วลม</Text>
          <Text style={globalStyles.h2}>{weatherData.wind.speed} m/s</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.textLayout}>
          <Text style={globalStyles.h2}>ทิศทางลม</Text>
          <Text style={globalStyles.h2}>{weatherData.wind.deg} °</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.textLayout}>
          <Text style={globalStyles.h2}>ความเร็วลมกระโชกเเรงถึง</Text>
          <Text style={globalStyles.h2}>{weatherData.wind.gust} m/s</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.textLayout}>
          <Text style={globalStyles.h2}>เมฆ</Text>
          <Text style={globalStyles.h2}>{weatherData.clouds.all} %</Text>
        </View>
        <View style={styles.lineStyle} />
      </View>
    </View>
  );
};

export default Infomation;

const styles = StyleSheet.create({
  textLayout: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tempText: {
    fontSize: 50,
    color: 'black',
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'gray',
    margin: 5,
  },
  describeTempText: {
    color: 'black',
    fontSize: 25,
  },
});
