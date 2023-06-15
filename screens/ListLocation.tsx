import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SCREEN_NAME} from '../constants/screensNames';

type Props = {};

const ListLocation = ({navigation}: any) => {
  const [storedValue, setStoredValue] = useState<any>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getStoredValue();
  }, []);

  const getStoredValue = async () => {
    try {
      const value = await AsyncStorage.getItem('storedValue');
      if (value !== null) {
        setStoredValue(JSON.parse(value));
      }
    } catch (error) {
      console.log('Error retrieving stored value:', error);
    }
  };

  const storeValue = async () => {
    try {
      const newItem = {value: inputValue};
      const updatedItems = [...storedValue, newItem];
      await AsyncStorage.setItem('storedValue', JSON.stringify(updatedItems));
      setStoredValue(updatedItems);
      setInputValue('');
    } catch (error) {
      console.log('Error storing value:', error);
    }
  };

  const deleteValue = async (item: any) => {
    try {
      const filteredItems = storedValue.filter(
        (storedItem: any) => storedItem.value !== item.value,
      );
      await AsyncStorage.setItem('storedValue', JSON.stringify(filteredItems));
      setStoredValue(filteredItems);
    } catch (error) {
      console.log('Error deleting value:', error);
    }
  };

  const renderItem = ({item}: {item: any}) => (
    <View
      style={{
        marginHorizontal: 5,
        marginVertical: 2,
        backgroundColor: '#FFBF9B',
        borderColor: '#644536',
        borderRadius: 8,
        borderWidth: 2,
      }}>
      <Pressable
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate(SCREEN_NAME.ZIPCODE, {
            value: item.value,
          });
        }}>
        <View style={{padding: 5, margin: 2, flex: 0.7}}>
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 5}}>
            {item.value}
          </Text>
        </View>
        <AntDesign
          name="closecircle"
          color={'red'}
          size={20}
          onPress={() => deleteValue(item)}
        />
      </Pressable>
    </View>
  );

  return (
    <View style={{backgroundColor: '#ffecc9', flex: 1}}>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="Add Zip code"
            placeholderTextColor="gray"
            onSubmitEditing={storeValue}
            keyboardType="numeric"
          />
          <AntDesign
            name="plussquare"
            size={40}
            color="#644536"
            style={{flex: 0.1}}
            onPress={() => {
              storeValue();
            }}
          />
        </View>
      </View>
      {storedValue.length > 0 ? (
        <View style={{flex: 0.9}}>
          <FlatList
            data={storedValue}
            keyExtractor={item => item.value}
            renderItem={renderItem}
          />
        </View>
      ) : (
        <View
          style={{flex: 0.9, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'black'}}>เพิ่ม Zipcode ของคุณสิ</Text>
        </View>
      )}
    </View>
  );
};

export default ListLocation;

const styles = StyleSheet.create({
  input: {
    borderColor: '#644536',
    borderWidth: 2,
    fontSize: 20,
    flex: 0.9,
    backgroundColor: '#F9FBE7',
    color: 'black',
  },
  itemContainer: {
    flexDirection: 'row',
  },
  deleteButton: {
    color: 'red',
    flex: 0.1,
    alignItems: 'center',
  },
});
