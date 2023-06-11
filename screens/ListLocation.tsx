import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AnimatedNumber from 'react-native-animated-number';

type Props = {};

const ListLocation = (props: Props) => {
  const [currInteger, setCurrInteger] = React.useState(100);
  return (
    <View>
      <AnimatedNumber value={currInteger} steps={100} />
      <Button
        title="a"
        onPress={() => {
          setCurrInteger(currInteger + 100);
        }}></Button>
      <Text>ListLocation</Text>
    </View>
  );
};

export default ListLocation;

const styles = StyleSheet.create({});
