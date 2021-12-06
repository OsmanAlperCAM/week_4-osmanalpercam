import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import HomeScreen from '../pages/Home';
import DetailScreen from '../pages/Detail';

const Stack = createNativeStackNavigator();

const Navigaton = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.HOME_PAGE} component={HomeScreen} />
        <Stack.Screen name={routes.DETAIL_PAGE} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigaton;
