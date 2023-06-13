import React, {useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles/globalStyles';

type Props = {
  list: {
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

const FiveDayForecastCard = (props: Props) => {
  const [pressCard, setPressCard] = useState(false);

  const groupDataByDate = (list: any[]) => {
    const groupedData: any[] = [];

    let currentDate = '';
    for (const item of list) {
      const date = new Date(item.dt_txt).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      if (date !== currentDate) {
        currentDate = date;
        groupedData.push({type: 'divider', date});
      }

      groupedData.push({type: 'data', item});
    }

    return groupedData;
  };

  const groupedData = groupDataByDate(props.list);

  const renderItem = ({item}: any) => {
    if (item.type === 'divider') {
      return (
        <View style={styles.dividerContainer}>
          <Text style={{textAlign: 'center'}}>{item.date}</Text>
        </View>
      );
    }

    const {item: data} = item;
    const formatted = new Date(data.dt_txt).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    return (
      <Pressable
        onPress={() => {
          setPressCard(true);
        }}>
        <View style={styles.container}>
          <Text style={globalStyles.Text}>{formatted}</Text>
          <Text style={globalStyles.Text}>{data.main.temp.toFixed()}°</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={globalStyles.Text}>{data.weather[0].description}</Text>
            <Image
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#999999',
                borderRadius: 40,
                marginHorizontal: 10,
              }}
              source={{
                uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
              }}
            />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View>
      <FlatList
        data={groupedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FiveDayForecastCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ffecc9',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
