import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectService from '../screens/SelectService';
import SelectDate from '../screens/SelectDate';

const Stack = createNativeStackNavigator();

const ClientNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {},
    }}>
      <Stack.Screen name='SelectService' component={SelectService} />
      <Stack.Screen name='SelectDate' component={SelectDate} />
    </Stack.Navigator>
  );
};

export default ClientNavigator