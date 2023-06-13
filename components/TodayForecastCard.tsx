import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyles from '../styles/globalStyles';

type Props = {
  list?: {
    dt: number;
    main: {
      temp: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
    dt_txt: string;
  }[];
};

const TodayForecastCard = (props: Props) => {
  const today = new Date().toISOString().slice(0, 10);
  const filteredData = props?.list?.filter(item => item.dt_txt.includes(today));
  return (
    <View>
      <FlatList
        horizontal
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          const dateformat = new Date(item.dt_txt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
          });
          const formatted = new Date(item.dt_txt).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });
          return (
            <View style={styles.container}>
              <Text style={globalStyles.Text}>{item.main.temp.toFixed()}°</Text>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#999999',
                  borderRadius: 40,
                }}
                source={{
                  uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`,
                }}
              />
              <Text style={globalStyles.Text}>{formatted}</Text>
              <Text style={globalStyles.Text}>{dateformat}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TodayForecastCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#ffecc9',
  },
});
