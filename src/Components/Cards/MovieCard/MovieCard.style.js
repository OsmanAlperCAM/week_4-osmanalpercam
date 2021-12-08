import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#ececec',
    borderRadius: 10,
  },
  
  image: {
    width: 75,
    height:100,
    resizeMode:'contain',
    backgroundColor: '#c61908',
    alignSelf: 'center',
  },
  body_container: {
    flex: 1,
    marginLeft: 5,
    justifyContent: 'center',
  },
  trailing_container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  brief: {
    fontSize: 15,
  },
  rate: {
    fontWeight: 'bold',
  },
  genre: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
