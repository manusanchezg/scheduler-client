import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectService from "../screens/ClientNavigation/SelectService";
import SelectDate from "../screens/ClientNavigation/SelectDate";
import SelectHour from "../screens/ClientNavigation/SelectHour";
import SelectClient from "../screens/ClientNavigation/SelectClient";
import SendInfoForm from "../screens/ClientNavigation/SendInfoForm";

import { colors } from "../styles/globalStyles";

export type ClientNavigationStackParamList = {
  SelectDate: {
    service: { id: number; name: string; price: number };
    selectedClient: string;
  };
  SelectService: any;
  SelectClient: { service: { id: number; name: string; price: number } };
  SendInfoForm: {
    date: {
      dateString: string;
      day: number;
      month: number;
      timestamp: number;
      year: number;
    };
    selectedClient: string;
    service: { id: number; name: string; price: number };
    hour: string;
  };
  SelectHour: {
    date: {
      dateString: string;
      day: number;
      month: number;
      timestamp: number;
      year: number;
    };
    selectedClient: string;
    service: { id: number; name: string; price: number };
  };
};

const Stack = createNativeStackNavigator<ClientNavigationStackParamList>();

const ClientNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerLargeTitleShadowVisible: false,
        headerStyle:{
          backgroundColor: colors.background,
          
        },
        headerTitle: "Hola mundo",
        contentStyle: {
          backgroundColor: colors.background,
          padding: 15,
        },
      }}
    >
      <Stack.Screen name="SelectService" component={SelectService} />
      <Stack.Screen name="SelectClient" component={SelectClient} />
      <Stack.Screen name="SelectDate" component={SelectDate} />
      <Stack.Screen name="SendInfoForm" component={SendInfoForm} />
      <Stack.Screen name="SelectHour" component={SelectHour} />
    </Stack.Navigator>
  );
};

export default ClientNavigator;
