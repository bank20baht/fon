import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e64e515',
  },
  Text: {
    fontSize: 15,
    color: 'black',
  },
  TempText: {
    fontSize: 200,
    textAlign: 'center',
    color: 'black',
  },
  dateText: {
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  nameText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  statusText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    paddingVertical: 10,
  },
  highlightText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default globalStyles;
