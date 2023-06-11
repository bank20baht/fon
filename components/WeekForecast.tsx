import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyles from '../styles/globalStyles';

type Props = {};

const weekdata = [
  {
    date: '11/5/2023',
    temperature: 30,
    status: 'rain',
  },
  {
    date: '14/5/2023',
    temperature: 30,
    status: 'snow',
  },
  {
    date: '13/5/2023',
    temperature: 30,
    status: 'rain',
  },
  {
    date: '14/5/2023',
    temperature: 30,
    status: 'hot',
  },
];

const WeekForecast = (props: Props) => {
  return (
    <View>
      <FlatList
        horizontal
        data={weekdata.slice(0, 7)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <Text style={globalStyles.Text}>Date: {item.date}</Text>
              <Text style={globalStyles.Text}>
                Temperature: {item.temperature}
              </Text>
              <Text style={globalStyles.Text}>Status: {item.status}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default WeekForecast;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});
