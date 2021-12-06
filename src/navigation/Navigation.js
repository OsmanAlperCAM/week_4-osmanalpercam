import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import HomeScreen from '../pages/Home';
import DetailScreen from '../pages/Detail';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerTitle: 'Movies'}}
          name={routes.HOME_PAGE}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerTitle: 'Movie Detail'}}
          name={routes.DETAIL_PAGE}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
