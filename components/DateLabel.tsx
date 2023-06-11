import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyles from '../styles/globalStyles';

type Props = {};

const DateLabel = (props: Props) => {
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={globalStyles.dateText}>{date}</Text>
    </View>
  );
};

export default DateLabel;
