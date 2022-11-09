import React from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';

asyncstore.propTypes = {
    
};

export function asyncstore(props) {
  
    const storeData = async (props) => {
        try {
          const jsonValue = JSON.stringify(props)
          await AsyncStorage.setItem('@storage_Key', jsonValue)

          return <View> <Text> sean</Text></View>;
        } catch (e) {
          // saving error
        }
      }
   
}

export function asyncget(props) {
  
  
const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
  
   
}


