import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyles from '../styles/globalStyles';

type Props = {};

const DateLabel = (props: Props) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={globalStyles.dateText}>Sunday, 11 June</Text>
    </View>
  );
};

export default DateLabel;
